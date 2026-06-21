import styles from "./CallToAction.module.css";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundEffect}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to <span className="text-gradient">Transform</span> Your Business?</h2>
          <p className={styles.description}>
            Partner with DevService Tech to build scalable software, high-converting websites, and data-driven marketing campaigns. Let's create something extraordinary together.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>Start Your Project</Link>
            <Link href="/services" className={`btn btn-outline ${styles.secondaryBtn}`}>Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
