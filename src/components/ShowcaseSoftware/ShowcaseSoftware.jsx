import styles from "./ShowcaseSoftware.module.css";

export default function ShowcaseSoftware() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Visuals Container (Left side on desktop) */}
        <div className={styles.visuals}>
          {/* Tablet Mockup */}
          <div className={styles.tabletMockup}>
            <div className={styles.tabletScreen}>
              <img src="/images/data_dashboard.png" alt="Data Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div className={styles.textContent}>
          <div className={styles.badge}>Custom Software</div>
          <h2 className={styles.title}>
            Engineering <span className="text-gradient">Complex Solutions</span>
          </h2>
          <p className={styles.description}>
            We engineer powerful Web and Mobile applications that streamline operations and accelerate growth. From custom enterprise CRMs to sleek mobile apps, we code the future of your business.
          </p>
          
          <ul className={styles.servicesList}>
            <li>Web Application Development</li>
            <li>Mobile App Development (iOS/Android)</li>
            <li>Custom Software Solutions</li>
            <li>CMS & Portal Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
