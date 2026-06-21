import Link from "next/link";
import Image from "next/image";
import styles from "./ServicesSplit.module.css";
import { ChevronRight } from "lucide-react";

export default function ServicesSplit() {
  return (
    <section className={styles.section}>
      {/* Top Pane - Web Design */}
      <div className={`${styles.pane} ${styles.paneTop}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Web Design</h2>
            <p className={styles.description}>
              Get a modern, fast, and mobile-friendly website that perfectly represents your brand and attracts more customers.
            </p>
            <Link href="/contact?service=Website%20Design" className={styles.link}>
              Contact Now <ChevronRight size={20} />
            </Link>
          </div>
          
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/web_mockups.png" 
              alt="Web Design Mockups" 
              width={600} 
              height={400} 
              className={styles.image}
            />
          </div>
        </div>
      </div>

      {/* Bottom Pane - Software Development */}
      <div className={`${styles.pane} ${styles.paneBottom}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Software Development</h2>
            <p className={styles.description}>
              We build custom software, web apps, and digital tools designed to solve your unique business challenges and streamline your operations.
            </p>
            <Link href="/contact?service=Software%20Development" className={styles.link}>
              Contact Now <ChevronRight size={20} />
            </Link>
          </div>
          
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/cafe_website.png" 
              alt="Software Development Campaign" 
              width={600} 
              height={400} 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
