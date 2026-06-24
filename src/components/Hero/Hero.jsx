import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
import { ChevronRight } from "lucide-react";

export default function Hero({ city = "India" }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Top Web Design & Software Solutions in {city}
          </h1>
          
          <p className={styles.description}>
            We build beautiful websites and powerful software to help your business grow online quickly and easily.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <span className={styles.featureDot}></span> Website Design
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureDot}></span> Software Development
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureDot}></span> Payment Gateway
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link prefetch={false} href="/contact" className={styles.link}>
              Get Started <ChevronRight size={20} />
            </Link>
            <Link prefetch={false} href="/projects" className="btn btn-secondary" style={{ color: "var(--foreground)" }}>
              Our Super Projects
            </Link>
          </div>
        </div>
        
        <div className={styles.imageWrapper} style={{ pointerEvents: 'none' }}>
          <Image unoptimized 
            src="/images/hero_image.png" 
            alt="DevService Tech (Development and service technology) Team" 
            width={600} 
            height={500} 
            className={styles.image}
            priority
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
