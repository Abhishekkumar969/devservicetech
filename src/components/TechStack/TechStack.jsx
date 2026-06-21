import styles from "./TechStack.module.css";

export default function TechStack() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟩" },
    { name: "Firebase", icon: "🔥" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Figma", icon: "🎨" },
    { name: "Shopify", icon: "🛍️" },
    { name: "WordPress", icon: "📝" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Technologies We <span className="text-gradient">Master</span></h2>
          <p className={styles.description}>We use modern, scalable, and secure technologies to build robust digital solutions.</p>
        </div>

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <div className={styles.icon}>{tech.icon}</div>
              <div className={styles.name}>{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
