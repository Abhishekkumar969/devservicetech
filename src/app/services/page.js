import ServicesGrid from "../../components/ServicesGrid/ServicesGrid";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Professional Web Design & Software Services | DevService Tech",
  description: "Explore our comprehensive suite of digital services including web design, software development, e-commerce solutions, and SEO optimization to boost your business.",
};

export default function Services() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Section 1: Intro */}
      <div className="container" style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <h1 className={styles.mainTitle}>
          What We <span className="text-gradient">Do</span>
        </h1>
        <p className={styles.mainDescription}>
          We provide a 360° suite of digital services designed to elevate your brand. From custom software development and fast websites to comprehensive digital campaigns, we ensure you stand out.
        </p>
      </div>

      {/* Section 2: Services Grid */}
      <ServicesGrid />

      {/* Section 3: Our Development Process */}
      <div className={styles.processSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Development Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Discovery</h3>
              <p>We start by understanding your goals, audience, and market requirements to formulate a winning strategy.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Design</h3>
              <p>Our creative team drafts intuitive UI/UX designs to ensure seamless interaction and high conversions.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Development</h3>
              <p>We write clean, secure, and scalable code using modern technologies like React, Next.js, and Node.js.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Launch</h3>
              <p>After rigorous testing, we deploy your product and provide ongoing support to keep it optimized.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Technologies We Use */}
      <div className={styles.techSection}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>Technologies We Use</h2>
          <p className={styles.mainDescription} style={{ marginBottom: "3rem" }}>
            We leverage industry-leading tools and frameworks to deliver top-tier performance.
          </p>
          <div className={styles.techGrid}>
            <div className={styles.techBadge}>React & Next.js</div>
            <div className={styles.techBadge}>Node.js & Express</div>
            <div className={styles.techBadge}>MongoDB & PostgreSQL</div>
            <div className={styles.techBadge}>Tailwind CSS & Vanilla CSS</div>
            <div className={styles.techBadge}>Firebase & AWS</div>
            <div className={styles.techBadge}>SEO Best Practices</div>
          </div>
        </div>
      </div>

      {/* Section 5: FAQ */}
      <div className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>Do you provide ongoing maintenance?</h4>
              <p>Yes, we offer monthly maintenance packages to ensure your website or app stays updated, secure, and running smoothly.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>How long does it take to build a website?</h4>
              <p>A standard business website takes 2-4 weeks, while complex web applications may take a few months depending on features.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Is SEO included?</h4>
              <p>All our websites are built with technical SEO best practices. For ongoing growth, we offer dedicated SEO marketing campaigns.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Do you build custom software?</h4>
              <p>Absolutely. We specialize in building tailored software solutions, dashboards, CRMs, and portals for various industries.</p>
            </div>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Ready to start your project?</h3>
            <Link href="/contact" className="btn btn-primary">Let's Talk</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
