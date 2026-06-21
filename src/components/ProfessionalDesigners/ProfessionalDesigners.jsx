import Image from "next/image";
import styles from "./ProfessionalDesigners.module.css";

export default function ProfessionalDesigners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Professional Website Designers with Standout Results
          </h2>
          <p className={styles.description}>
            DevService Tech (Development and service technology) experts are experienced website designers and developers. Vetted for their years of experience and quality of work, DevService Tech (Development and service technology) Experts can help you polish an existing website, or build a new website from scratch.
          </p>
          
          <div className={styles.features}>
            <div>
              <h3 className={styles.featureTitle}>Save time</h3>
              <p className={styles.featureText}>
                You're busy. Spend time where you're needed most and let a seasoned professional work their magic.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Get custom work</h3>
              <p className={styles.featureText}>
                Whether you have specific feature requirements or need custom coding, an Expert can bring your vision to life.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Lean on expertise</h3>
              <p className={styles.featureText}>
                Work with a pro who knows exactly how to make your website perform its best.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/developers_vector.png" 
            alt="Web Developers Illustration" 
            width={600} 
            height={500} 
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
