import Image from "next/image";
import styles from "./AboutIntro.module.css";

export default function AboutIntro({ city = "India" }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Your Strategic Digital<br />Partner in {city}
          </h2>
          <p className={styles.description}>
            Welcome to DevService Tech, the leading technology and creative agency proudly serving {city} and clients globally. We are dedicated to transforming your business through innovative web design, comprehensive e-commerce solutions, and robust custom software. Our approach goes beyond aesthetics—we engineer high-performing, scalable platforms designed to dominate search rankings and drive sustainable growth. From seamless API integrations and intuitive user interfaces to data-driven SEO campaigns, we equip your brand with the tools it needs to outpace the competition. Partner with us to unlock unparalleled digital potential and secure a measurable return on your investment.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image unoptimized 
            src="/images/hero_image.png" 
            alt="DevService Tech (Development and service technology) Team" 
            width={600} 
            height={500} 
            className={styles.image}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
