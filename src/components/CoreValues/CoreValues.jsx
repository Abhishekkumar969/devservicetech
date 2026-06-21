import styles from "./CoreValues.module.css";

export default function CoreValues() {
  const values = [
    {
      icon: "🎯",
      title: "Results-Driven",
      desc: "We focus on outcomes. If a design or feature doesn't drive your business forward, we don't build it."
    },
    {
      icon: "⚡",
      title: "Speed & Performance",
      desc: "In the digital age, speed is everything. We engineer solutions that load instantly and perform flawlessly."
    },
    {
      icon: "🤝",
      title: "Radical Transparency",
      desc: "No hidden fees, no technical jargon. We keep you in the loop every step of the development process."
    },
    {
      icon: "🛡️",
      title: "Uncompromising Security",
      desc: "Your data is sacred. We build military-grade security into everything we create from day one."
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Core <span className="text-gradient">Values</span></h2>
          <p className={styles.description}>The principles that guide everything we do at DevService Tech.</p>
        </div>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDesc}>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
