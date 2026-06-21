import Link from "next/link";
import styles from "./FloatingActions.module.css";
import { Phone, MessageCircle, Star, Shield, Zap, Globe } from "lucide-react";

export default function FloatingActions() {
  const clients = [
    { name: "TechNova", icon: <Zap size={16} /> },
    { name: "GlobalWeb", icon: <Globe size={16} /> },
    { name: "SecureNet", icon: <Shield size={16} /> },
    { name: "AppMinds", icon: <Star size={16} /> },
  ];

  return (
    <div className={styles.floatingActions}>
      {/* Right Buttons */}
      <div className={styles.rightButtons}>
        <a href="tel:+919693894812" className={`${styles.circleButton} ${styles.callButton}`} aria-label="Call Us">
          <Phone size={24} />
        </a>
        <a href="https://wa.me/919693894812" className={`${styles.circleButton} ${styles.whatsappButton}`} aria-label="WhatsApp">
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}
