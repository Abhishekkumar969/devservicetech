"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

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
      // Create MonthYear string, e.g., "June2026"
      const date = new Date();
      const monthYear = date.toLocaleString('default', { month: 'long' }) + date.getFullYear();

      // Generate a unique ID for this entry
      const entryId = uuidv4();

      // Get reference to Contacts/MonthYear document
      const docRef = doc(db, "Contacts", monthYear);

      // Save data under the generated ID map inside the document
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
    <div className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Let's <span className="text-gradient">Talk</span></h1>
          <p className={styles.description}>
            Have a project in mind? We'd love to hear from you. Give us a call or send us a message.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 9693894812</p>
                <p>Available 24/7/365</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>devservicetech58@gmail.com</p>
                <p>We'll respond within 24 hours.</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h3>Office</h3>
                <p>India, Bihar</p>
                <p>Serving clients globally.</p>
              </div>
            </div>
          </div>

          <div>
            {status === "success" && (
              <div style={{ padding: "15px", marginBottom: "20px", backgroundColor: "rgba(0,255,0,0.1)", borderLeft: "4px solid green", color: "var(--foreground)" }}>
                Thank you! Your message has been sent successfully. We will contact you soon.
              </div>
            )}
            {status === "error" && (
              <div style={{ padding: "15px", marginBottom: "20px", backgroundColor: "rgba(255,0,0,0.1)", borderLeft: "4px solid red", color: "var(--foreground)" }}>
                Failed to send message. Please check your connection or contact us directly.
              </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" className={styles.input} required placeholder=" " value={formData.name} onChange={handleChange} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input type="tel" id="phone" className={styles.input} required placeholder=" " value={formData.phone} onChange={handleChange} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address </label>
                <input type="email" id="email" className={styles.input} placeholder=" " value={formData.email} onChange={handleChange} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.label}>What are you looking for?</label>
                <select id="service" className={styles.input} required value={formData.service} onChange={handleChange}>
                  <option value="" disabled>Select a service or inquiry</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Software Development">Software Development</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                  <option value="Internship">Internship Application</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Your Message </label>
                <textarea id="message" className={styles.textarea} placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Section 2: What Happens Next */}
        <div className={styles.nextStepsSection}>
          <h2 className={styles.sectionTitle}>What Happens Next?</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <h4>1. We Review</h4>
              <p>Our team carefully reviews your inquiry to understand your needs.</p>
            </div>
            <div className={styles.stepCard}>
              <h4>2. We Connect</h4>
              <p>We'll reach out within 24 hours to schedule a detailed discovery call.</p>
            </div>
            <div className={styles.stepCard}>
              <h4>3. We Propose</h4>
              <p>You receive a custom proposal and project timeline tailored to you.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Global Reach */}
        <div className={styles.globalSection}>
          <div className={styles.globalContent}>
            <h2>Serving Clients Globally</h2>
            <p>While our headquarters is proudly located in Bihar, India, we work with clients across the globe. We adapt to your time zone to ensure seamless communication and project delivery.</p>
          </div>
        </div>

        {/* Section 4: Contact FAQ */}
        <div className={styles.contactFaq}>
          <h2 className={styles.sectionTitle}>Quick FAQs</h2>
          <div className={styles.faqList}>
            <div className={styles.faqCard}>
              <h5>Do you accept small projects?</h5>
              <p>Yes, we work with startups and small businesses to deliver high-quality, scalable solutions.</p>
            </div>
            <div className={styles.faqCard}>
              <h5>How do we communicate?</h5>
              <p>We use tools like Slack, Google Meet, and Email to ensure transparent and regular updates.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
