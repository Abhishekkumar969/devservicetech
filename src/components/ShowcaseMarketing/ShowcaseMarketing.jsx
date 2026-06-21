import styles from "./ShowcaseMarketing.module.css";

export default function ShowcaseMarketing() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Visuals Container (Left side) */}
        <div className={styles.visuals}>
          <div className={styles.chartContainer}>
            <div className={styles.chartTitle}>Traffic Growth</div>
            <div className={styles.bars}>
              <div className={styles.barWrapper}><div className={styles.bar} style={{height: '30%', animationDelay: '0s'}}></div></div>
              <div className={styles.barWrapper}><div className={styles.bar} style={{height: '50%', animationDelay: '0.2s'}}></div></div>
              <div className={styles.barWrapper}><div className={styles.bar} style={{height: '75%', animationDelay: '0.4s'}}></div></div>
              <div className={styles.barWrapper}><div className={styles.bar} style={{height: '100%', animationDelay: '0.6s', background: 'var(--primary)'}}></div></div>
            </div>
            
            <div className={styles.statsFloat}>
              <div className={styles.statIcon}>📈</div>
              <div>
                <div className={styles.statValue}>+245%</div>
                <div className={styles.statLabel}>ROI Generated</div>
              </div>
            </div>
            
            <div className={styles.socialFloat}>
              <span>f</span>
              <span>G</span>
              <span>in</span>
            </div>
          </div>
        </div>

        <div className={styles.textContent}>
          <div className={styles.badge}>Digital Marketing</div>
          <h2 className={styles.title}>
            Dominate Your <span className="text-gradient">Market</span>
          </h2>
          <p className={styles.description}>
            Stop guessing and start growing. Our data-driven digital marketing strategies ensure your brand gets in front of the right audience at the right time, maximizing your ROI.
          </p>
          
          <ul className={styles.servicesList}>
            <li>Search Engine Optimization (SEO)</li>
            <li>PPC Campaigns (Google Ads)</li>
            <li>Social Media Marketing (FB/Insta)</li>
            <li>Local SEO & Google Business Profile</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
