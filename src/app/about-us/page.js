import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | DevService Tech (Development and service technology)",
  description: "Learn more about DevService Tech (Development and service technology), the premier digital agency providing top-notch web design and software solutions.",
};

export default function AboutUs() {
  return (
    <div className={styles.section}>
      <div className="container">
        
        {/* Section 1: Hero Intro */}
        <div className={styles.header}>
          <h1 className={styles.title}>About <span className="text-gradient">DevService Tech</span></h1>
          <p className={styles.description}>
            We are a leading web design and software development agency, committed to turning your vision into a powerful digital reality.
          </p>
        </div>

        {/* Section 2: Mission & Content */}
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image unoptimized src="/images/team_office.png" alt="DevService Tech Team Office" width={800} height={500} style={{ width: "100%", height: "auto", borderRadius: "1rem", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
          </div>

          <div className={styles.textContent}>
            <h3>Our Mission is Simple</h3>
            <p>
              Whether you're a startup ready to launch or an established brand aiming to elevate, our mission is to empower businesses with cutting-edge technology and stunning design.
            </p>
            <p>
              With years of experience, a passionate team, and a portfolio of successful software products and websites, we specialize in crafting solutions that help your business grow, scale, and thrive online.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Link prefetch={false} href="/contact" className="btn btn-primary hover-lift">
                Work With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Vision & Core Values */}
        <div className={styles.coreValuesSection}>
          <h2 className={styles.sectionTitle}>Our Vision & Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h4>Innovation</h4>
              <p>We continuously explore new technologies like Next.js and React to provide the most modern solutions.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>Quality</h4>
              <p>Every pixel and line of code is reviewed to ensure the highest standards of performance and aesthetics.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>Integrity</h4>
              <p>Transparent communication, honest pricing, and clear project timelines are the foundations of our work.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Why Choose Us */}
        <div className={styles.whyChooseUsSection}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
            <ul className={styles.benefitsList}>
              <li><strong>Experienced Professionals:</strong> Our team consists of seasoned developers and creative designers.</li>
              <li><strong>SEO-First Approach:</strong> We build digital experiences that rank high and load fast.</li>
              <li><strong>Custom Tailored:</strong> No cookie-cutter templates. Everything is built to suit your brand.</li>
              <li><strong>Ongoing Support:</strong> We stand by you long after the product is launched.</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Stats / Our Impact */}
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
          <div className={styles.statItem}>
            <h4>99%</h4>
            <p>Client Retention</p>
          </div>
        </div>

      </div>
    </div>
  );
}
