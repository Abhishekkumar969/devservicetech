import styles from "./ClientsMarquee.module.css";
import { Zap, Globe, Cpu, Cloud, Shield, Database, Layout, Smartphone } from "lucide-react";

export default function ClientsMarquee() {
  const clients = [
    { name: "TechNova", icon: <Zap size={28} /> },
    { name: "GlobalWeb", icon: <Globe size={28} /> },
    { name: "CoreSystems", icon: <Cpu size={28} /> },
    { name: "CloudSync", icon: <Cloud size={28} /> },
    { name: "SecureNet", icon: <Shield size={28} /> },
    { name: "DataFlow", icon: <Database size={28} /> },
    { name: "UIX Studio", icon: <Layout size={28} /> },
    { name: "AppMinds", icon: <Smartphone size={28} /> },
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {clients.map((client, i) => (
          <div key={`client-1-${i}`} className={styles.logoItem}>
            {client.icon} <span>{client.name}</span>
          </div>
        ))}
        {/* Duplicate for seamless looping */}
        {clients.map((client, i) => (
          <div key={`client-2-${i}`} className={styles.logoItem}>
            {client.icon} <span>{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
