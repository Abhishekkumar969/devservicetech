"use client";
import { useState } from "react";
import styles from "./NewsletterSignup.module.css";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Get Our Free Digital Growth Guide</h2>
          <p className={styles.description}>
            Join 5,000+ business owners who receive our weekly insights on SEO, web design, and software strategies.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "submitting" || status === "success"}
            />
            <button
              type="submit"
              className={`btn btn-primary ${styles.btn}`}
              disabled={status === "submitting" || status === "success"}
            >
              {status === "submitting" ? "Sending..." : status === "success" ? "Subscribed!" : "Subscribe"}
            </button>
          </form>

          {status === "success" && (
            <p className={styles.successMessage}>Thanks for subscribing! Check your inbox soon.</p>
          )}
        </div>
      </div>
    </section>
  );
}
