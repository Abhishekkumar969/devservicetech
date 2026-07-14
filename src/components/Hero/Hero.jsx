import Link from "next/link";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./Hero.module.css";
import { ChevronRight } from "lucide-react";

export default function Hero({ city = "India" }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Top Web Design & Software Solutions in {city}
          </h1>
          
          <p className={styles.description}>
            We build beautiful websites and powerful software to help your business grow online quickly and easily.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <span className={styles.featureDot}></span> Website Design
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureDot}></span> Software Development
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureDot}></span> Payment Gateway
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <Link prefetch={false} href="/services" className="btn btn-primary" style={{ color: "var(--foreground)" }}>
              Our Services
            </Link>
            <Link prefetch={false} href="/projects" className="btn btn-secondary" style={{ color: "var(--foreground)" }}>
              Our Super Projects
            </Link>
          </div>
        </div>
        
        <div style={{ flex: 1, maxWidth: "500px", width: "100%", margin: "0 auto" }}>
          <ContactForm title="Get a Free Quote" />
        </div>
      </div>
    </section>
  );
}
