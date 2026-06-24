"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../login/page.module.css"; // Reuse login styles

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Create user profile in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        createdAt: new Date().toISOString(),
      });
      router.push("/profile");
    } catch (err) {
      setError("Failed to sign up. Email might be in use.");
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      // Ensure user profile exists in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        createdAt: new Date().toISOString(),
      }, { merge: true });
      router.push("/profile");
    } catch (err) {
      setError("Failed to sign up with Google.");
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Sign up to purchase and download projects.</p>
          
          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSignup} className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
              Sign Up
            </button>
          </form>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <button onClick={handleGoogleSignup} className="btn btn-outline" style={{ width: "100%" }}>
            Continue with Google
          </button>

          <p className={styles.footerText}>
            Already have an account? <Link prefetch={false} href="/login" className={styles.link}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
