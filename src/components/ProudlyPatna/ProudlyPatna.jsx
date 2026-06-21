import Link from "next/link";
import styles from "./ProudlyPatna.module.css";
import { ChevronRight } from "lucide-react";

export default function ProudlyPatna({ city = "India" }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Proudly Based in {city},<br /> Working With Clients Worldwide
          </h2>
          <p className={styles.description}>
            Whether you're in {city} or International, we bring world-class digital solutions to your doorstep. At DevService Tech, we're not just another tech agency—we're a Global creative powerhouse. Whether you're a startup ready to launch or an established brand aiming to elevate, our mission is simple: turn your vision into a powerful digital reality. With years of experience, a passionate team, and a portfolio that speaks for itself, we specialize in crafting pixel-perfect websites, impactful marketing strategies, and innovative software solutions that help your business grow, scale, and thrive online.
          </p>
          
          <Link href="/about-us" className={styles.link}>
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
