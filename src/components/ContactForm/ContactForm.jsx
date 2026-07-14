"use client";

import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import { db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function ContactForm({ title = "Let's Talk" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const date = new Date();
      const monthYear = date.toLocaleString('default', { month: 'long' }) + date.getFullYear();
      const entryId = uuidv4();
      const docRef = doc(db, "Contacts", monthYear);

      await setDoc(docRef, {
        [entryId]: {
          ...formData,
          createdAt: serverTimestamp()
        }
      }, { merge: true });

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>{title}</h3>
      {status === "success" && (
        <div style={{ padding: "10px", marginBottom: "15px", backgroundColor: "rgba(0,255,0,0.1)", borderLeft: "4px solid green", color: "var(--foreground)", fontSize: "0.9rem" }}>
          Message sent successfully!
        </div>
      )}
      {status === "error" && (
        <div style={{ padding: "10px", marginBottom: "15px", backgroundColor: "rgba(255,0,0,0.1)", borderLeft: "4px solid red", color: "var(--foreground)", fontSize: "0.9rem" }}>
          Failed to send. Try again.
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input type="text" id="name" className={styles.input} required placeholder="Full Name" value={formData.name} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <input type="tel" id="phone" className={styles.input} required placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <input type="email" id="email" className={styles.input} placeholder="Email Address" value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <select id="service" className={styles.input} required value={formData.service} onChange={handleChange}>
            <option value="" disabled>Select a service</option>
            <option value="Website Design">Website Design</option>
            <option value="Software Development">Software Development</option>
            <option value="SEO Services">SEO Services</option>
            <option value="E-Commerce Solutions">E-Commerce Solutions</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <textarea id="message" className={styles.textarea} placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
