import styles from "./TopBar.module.css";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <a href="tel:+919693894812" className={styles.contactItem}>
            <Phone size={16} />
            <span className={styles.contactText}>+91 9693894812</span>
          </a>
        </div>
        <div className={styles.tagline} style={{ fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.85rem", textAlign: "center" }}>
          Development and service technology
        </div>
        <div className={styles.socialIcons}>
          <a href="tel:+919693894812" className={styles.mobilePhone} aria-label="Phone"><Phone size={16} /></a>
          <a href="mailto:devservicetech58@gmail.com" aria-label="Email"><Mail size={16} /></a>
          <a href="#" aria-label="Facebook"><FaFacebook size={16} /></a>
          <a href="#" aria-label="Twitter"><FaTwitter size={16} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
          <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
        </div>
      </div>
    </div>
  );
}
