import styles from "./ShowcaseWebDesign.module.css";
import Image from "next/image";

export default function ShowcaseWebDesign() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <div className={styles.badge}>Web Design Solutions</div>
          <h2 className={styles.title}>
            Stunning Websites That <span className="text-gradient">Convert</span>
          </h2>
          <p className={styles.description}>
            We build lightning-fast, highly responsive websites tailored to your brand. From corporate landing pages to complex e-commerce stores, our designs are optimized for every device.
          </p>
          
          <ul className={styles.servicesList}>
            <li>Responsive Website Creation</li>
            <li>E-Commerce (Shopify & Custom)</li>
            <li>WordPress Experts</li>
            <li>Redesign & Website Maintenance</li>
          </ul>
        </div>

        <div className={styles.visuals}>
          {/* Laptop Mockup */}
          <div className={styles.laptopMockup}>
            <div className={styles.laptopScreen}>
              <div className={styles.placeholderContent}>
                 <span style={{color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.5rem'}}>Landing Page</span>
                 <br />
                 Optimized for high conversions
              </div>
            </div>
            <div className={styles.laptopKeyboard}></div>
          </div>

          {/* Mobile Mockup (overlapping) */}
          <div className={styles.mobileMockup}>
            <div className={styles.mobileScreen}>
              <div className={styles.placeholderContentMobile}>
                 Mobile UI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
