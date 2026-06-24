import Link from "next/link";
import styles from "./ProudlyPatna.module.css";
import { ChevronRight } from "lucide-react";

export default function ProudlyPatna({ city = "India" }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Local Roots in {city},<br /> Serving Clients Globally
          </h2>
          <p className={styles.description}>
            No matter where you are located, we deliver top-tier digital services right to you. DevService Tech is more than a standard agency; we are your dedicated tech partners. From new startups to large enterprises, our goal is to bring your digital dreams to life. Backed by an experienced and passionate team, we build stunning websites, smart software, and strong online strategies. We are committed to helping your brand succeed, scale up, and shine in the digital world.
          </p>
          
          <Link prefetch={false} href="/about-us" className={styles.link}>
            Learn More <ChevronRight size={20} />
          </Link>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.clientsBox} style={{ display: 'none' }}>
            <h3 style={{ fontSize: "1.2rem", color: "var(--foreground)", marginBottom: "1.5rem", textAlign: "center" }}>Trusted by innovative brands</h3>
            
            <div className={styles.clientsGrid}>
              <div className={styles.clientItem}>
                <span className={styles.clientIcon}>🛍️</span>
                <span className={styles.clientName}>Flipkart</span>
              </div>
              <div className={styles.clientItem}>
                <span className={styles.clientIcon}>🍲</span>
                <span className={styles.clientName}>Zomato</span>
              </div>
              <div className={styles.clientItem}>
                <span className={styles.clientIcon}>💳</span>
                <span className={styles.clientName}>Paytm</span>
              </div>
              <div className={styles.clientItem}>
                <span className={styles.clientIcon}>🚗</span>
                <span className={styles.clientName}>Ola Cabs</span>
              </div>
              <div className={styles.clientItem}>
                <span className={styles.clientIcon}>🏨</span>
                <span className={styles.clientName}>OYO Rooms</span>
              </div>
              <div className={styles.clientItem}>
                <span className={styles.clientIcon}>🛒</span>
                <span className={styles.clientName}>JioMart</span>
              </div>
              <div className={styles.clientItem}>
                <span className={styles.clientIcon}>🏦</span>
                <span className={styles.clientName}>HDFC Bank</span>
              </div>
              <div className={styles.clientItem}>
                <span className={styles.clientIcon}>🛵</span>
                <span className={styles.clientName}>Swiggy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
