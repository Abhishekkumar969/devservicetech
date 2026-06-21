"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
        await fetchPurchases(currentUser.uid);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const fetchPurchases = async (userId) => {
    try {
      const q = query(collection(db, "orders"), where("userId", "==", userId), where("status", "==", "paid"));
      const querySnapshot = await getDocs(q);
      let items = [];
      querySnapshot.forEach((doc) => {
        // Assume each order has an array of `items`
        const orderData = doc.data();
        if (orderData.items) {
          items = [...items, ...orderData.items];
        }
      });
      setPurchases(items);
    } catch (err) {
      console.error("Error fetching purchases", err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (loading) {
    return <div className={styles.section}><div className="container">Loading profile...</div></div>;
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.profileHeader}>
          <div>
            <h1 className={styles.title}>My Profile</h1>
            <p className={styles.subtitle}>Welcome back, {user?.displayName || user?.email}</p>
          </div>
          <button onClick={handleLogout} className="btn btn-outline">Log Out</button>
        </div>

        <div className={styles.purchasesSection}>
          <h2>My Purchased Projects</h2>
          {purchases.length === 0 ? (
            <div className={styles.emptyState}>
              <p>You haven't purchased any projects yet.</p>
              <Link href="/projects" className="btn btn-primary" style={{ marginTop: "1rem" }}>Browse Projects</Link>
            </div>
          ) : (
            <div className={styles.grid}>
              {purchases.map((project, idx) => (
                <div key={idx} className={styles.card}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.desc}</p>
                  <a href={project.downloadUrl || "#"} className="btn btn-primary" download style={{ width: "100%", marginTop: "1rem" }}>
                    Download Code Folder
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
