import Image from "next/image";
import styles from "./ProfessionalDesigners.module.css";

export default function ProfessionalDesigners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Masterful Software Architects & Web Designers
          </h2>
          <p className={styles.description}>
            Our team at DevService Tech is driven by a passion for excellence. We don't just write code or design graphics; we architect complete digital ecosystems. From responsive landing pages to complex enterprise software, we bring your vision to life.
          </p>
          
          <div className={styles.features}>
            <div>
              <h3 className={styles.featureTitle}>Accelerate Your Growth</h3>
              <p className={styles.featureText}>
                We build tools and platforms that streamline your operations and boost your conversions, allowing you to focus on scaling your business.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Bespoke Engineering</h3>
              <p className={styles.featureText}>
                No off-the-shelf templates. Every project is meticulously crafted from scratch to align flawlessly with your brand identity and technical requirements.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Reliable Partnership</h3>
              <p className={styles.featureText}>
                We prioritize transparency, security, and long-term support, ensuring your digital assets remain robust and secure for years to come.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image unoptimized 
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
