"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default function ProjectsPage() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const router = useRouter();

  // Data State
  const [projects, setProjects] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  // Modal State
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [pendingProject, setPendingProject] = useState(null);

  // Auth State
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check login on page load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setShowLoginModal(true);
      } else {
        setShowLoginModal(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const productsRef = collection(db, 'Products');
        const snapshot = await getDocs(productsRef);
        const projectsData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.isActive) {
            projectsData.push({ id: doc.id, ...data });
          }
        });
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoadingProducts(false);
      }
    };
    
    fetchProjects();
  }, []);

  const handleAddToCart = (project) => {
    if (!user) {
      setPendingProject(project);
      setShowLoginModal(true);
      return;
    }
    executeAddToCart(project);
  };

  const executeAddToCart = (project) => {
    addToCart(project);
    router.push("/cart"); // Automatically redirect to cart
  };

  const handleModalAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        const { createUserWithEmailAndPassword } = await import("firebase/auth");
        const { doc, setDoc } = await import("firebase/firestore");

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name,
          email,
          createdAt: new Date().toISOString(),
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      setShowLoginModal(false);
      if (pendingProject) executeAddToCart(pendingProject);
    } catch (err) {
      setError(isSignup ? "Sign up failed. Email might be in use." : "Failed to log in. Please check credentials.");
    }
  };

  const handleModalGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);

      // Ensure profile exists in DB
      const { doc, setDoc } = await import("firebase/firestore");
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        createdAt: new Date().toISOString(),
      }, { merge: true });

      setShowLoginModal(false);
      if (pendingProject) executeAddToCart(pendingProject);
    } catch (err) {
      setError("Google authentication failed.");
    }
  };

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Our <span className="text-gradient">Projects</span></h1>
          <p className={styles.description}>
            Purchase full source code and design assets for our premium digital experiences.
          </p>
        </div>

        {loadingProducts ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "#64748b" }}>Loading products...</div>
        ) : projects.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "#64748b" }}>No active products available.</div>
        ) : (
          <div className={styles.grid}>
            {projects.map((project) => {
              const inCart = user && cart.some(item => item.id === project.id);
              return (
                <div key={project.id} className={styles.card}>
                  <div className={styles.cardImage} style={{ background: project.imageUrl ? `url(${project.imageUrl}) center/cover no-repeat` : '#e2e8f0' }}>
                    {!project.imageUrl && <span style={{ color: '#94a3b8' }}>[ Project Image ]</span>}
                  </div>
                <div className={styles.cardBody}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span className={styles.category}>{project.category}</span>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ textDecoration: "line-through", color: "var(--foreground-muted)", fontSize: "0.85rem", marginRight: "0.5rem" }}>
                        ₹{Math.round(project.price * 1.35)}
                      </span>
                      <strong style={{ fontSize: "1.2rem", color: "var(--primary)" }}>₹{project.price}</strong>
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.desc}</p>

                  <button
                    onClick={() => inCart ? router.push("/cart") : handleAddToCart(project)}
                    className={`btn ${inCart ? 'btn-outline' : 'btn-primary'}`}
                    style={{ width: "100%" }}
                  >
                    {inCart ? "Go to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>

      {/* Auth Modal */}
      {showLoginModal && (
        <div className={styles.modalOverlay} onClick={() => setShowLoginModal(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowLoginModal(false)}>×</button>
            <h2 className={styles.modalTitle}>{isSignup ? "Create Account" : "Login Required"}</h2>
            <p className={styles.modalSubtitle}>
              {isSignup ? "Sign up to purchase projects." : "Please log in to browse and add projects to your cart."}
            </p>

            {error && <div className={styles.errorText}>{error}</div>}

            <form onSubmit={handleModalAuth} className={styles.modalForm}>
              {isSignup && (
                <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} className={styles.modalInput} />
              )}
              <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className={styles.modalInput} />
              <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className={styles.modalInput} />
              <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
                {isSignup ? "Sign Up" : "Log In"}
              </button>
            </form>

            <div style={{ textAlign: "center", margin: "1rem 0", color: "var(--foreground-muted)" }}>OR</div>

            <button onClick={handleModalGoogleLogin} className="btn btn-outline" style={{ width: "100%" }}>
              Continue with Google
            </button>

            <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--foreground-muted)" }}>
              {isSignup ? "Already have an account? " : "Don't have an account? "}
              <button
                onClick={() => { setIsSignup(!isSignup); setError(""); }}
                style={{ background: "none", border: "none", color: "var(--primary)", fontWeight: "600", cursor: "pointer" }}
              >
                {isSignup ? "Log in" : "Sign up"}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
