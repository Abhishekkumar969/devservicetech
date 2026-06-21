import Link from "next/link";
import styles from "./Footer.module.css";
import { allIndianCities } from "@/data/cities";
import SeoFooterLink from "./SeoFooterLink";
import CopyrightText from "./CopyrightText";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const citiesText = allIndianCities.split(" | ").join(", ");

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Legal Disclaimer */}
        <div className={styles.legalDisclaimer}>
          <p>Copyright &copy; {currentYear} DevService Tech. All rights reserved.</p>
          <p>DevService Tech is a premier digital agency specializing in Web Design, Software Development, and SEO Services.</p>
          <p>We are dedicated to building scalable, modern, and highly performant digital solutions tailored to your brand's unique needs. Unauthorized copying, distribution, or reproduction of any materials from this website is strictly prohibited.</p>
        </div>

        {/* Grid Layout */}
        <div className={styles.grid}>
          {/* Services */}
          <div>
            <h3 className={styles.title}>SERVICES</h3>
            <ul className={styles.links}>
              <li><Link href="/services" className={styles.link}>WEBSITE DESIGN</Link></li>
              <li><Link href="/services" className={styles.link}>WEB DEVELOPMENT</Link></li>
              <li><Link href="/services" className={styles.link}>DIGITAL MARKETING</Link></li>
              <li><Link href="/services" className={styles.link}>SEARCH ENGINE OPTIMIZATION</Link></li>
              <li><Link href="/services" className={styles.link}>WEB HOSTING</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={styles.title}>COMPANY</h3>
            <ul className={styles.links}>
              <li><Link href="/about-us" className={styles.link}>ABOUT</Link></li>
              <li><Link href="/contact" className={styles.link}>FEEDBACK</Link></li>
              <li><Link href="/contact" className={styles.link}>CONTACT US</Link></li>
              <li><Link href="#" className={styles.link}>PRIVACY POLICY</Link></li>
              <li><Link href="#" className={styles.link}>TERMS OF SERVICE</Link></li>
              <li><Link href="/about-us" className={styles.link}>TIMELINE</Link></li>
            </ul>
          </div>

          {/* Help Desk */}
          <div>
            <h3 className={styles.title}>HELP DESK</h3>
            <ul className={styles.links}>
              <li><Link href="/contact" className={styles.link}>CONTACT US</Link></li>
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h3 className={styles.title}>PARTNER</h3>
            <div className={styles.partners}>
              <div className={styles.partnerBadge}>
                <div className={styles.googlePartner}>
                  <span style={{ color: "#4285F4", fontWeight: "bold", fontSize: "1.5rem" }}>G</span>
                  <p style={{ fontSize: "0.85rem", margin: "5px 0" }}>Google Partner</p>
                  <div className={styles.partnerYear}>PREMIER 2025</div>
                </div>
              </div>
              <div className={styles.partnerBadge}>
                <div className={styles.hostingerBadge}>
                  <span>HOSTINGER</span>
                </div>
              </div>
              <div className={styles.partnerBadge}>
                <div className={styles.facebookBadge}>
                  <span>FACEBOOK</span>
                  <div className={styles.facebookSub}>BUSINESS PARTNER</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsored / Backlink */}
        <div className={styles.sponsoredLink}>
          You can book your nearby wedding venue by <a href="https://daytobook.com/" target="_blank" rel="noopener noreferrer">Daytobook</a>
        </div>

        {/* SEO Location Link - Next item in linked list */}
        <SeoFooterLink />

        {/* Copyright */}
        <div className={styles.bottom}>
          <CopyrightText />
        </div>
      </div>
    </footer>
  );
}
