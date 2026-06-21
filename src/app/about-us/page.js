import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | DevService Tech (Development and service technology)",
  description: "Learn more about DevService Tech (Development and service technology), the premier digital agency in India.",
};

export default function AboutUs() {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>About <span className="text-gradient">DevService Tech</span></h1>
          <p className={styles.description}>
            We are India's leading creative powerhouse, turning your vision into a powerful digital reality.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image src="/images/team_office.png" alt="DevService Tech Team Office" width={800} height={500} style={{ width: "100%", height: "auto", borderRadius: "1rem", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
          </div>

          <div className={styles.textContent}>
            <h3>Our Mission is Simple</h3>
            <p>
              Whether you're a startup ready to launch or an established brand aiming to elevate, our mission is simple: turn your vision into a powerful digital reality.
            </p>
            <p>
              With years of experience, a passionate team, and a portfolio that speaks for itself, we specialize in crafting pixel-perfect websites, impactful marketing strategies, and innovative software solutions that help your business grow, scale, and thrive online.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Link href="/contact" className="btn btn-primary hover-lift">
                Work With Us
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h4>100+</h4>
            <p>Projects Delivered</p>
          </div>
          <div className={styles.statItem}>
            <h4>50+</h4>
            <p>Happy Clients</p>
          </div>
          <div className={styles.statItem}>
            <h4>5+</h4>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
}
