import styles from "./ProcessSteps.module.css";

export default function ProcessSteps() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We dive deep into your business goals, target audience, and market to formulate a winning strategy."
    },
    {
      num: "02",
      title: "UI/UX Design",
      desc: "Our designers craft intuitive, stunning interfaces that align perfectly with your brand identity."
    },
    {
      num: "03",
      title: "Development",
      desc: "We build robust, scalable architecture using cutting-edge technologies to bring the designs to life."
    },
    {
      num: "04",
      title: "Testing & Launch",
      desc: "Rigorous quality assurance ensures a flawless launch, followed by continuous support."
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Proven <span className="text-gradient">Process</span></h2>
          <p className={styles.description}>A transparent, step-by-step approach to delivering digital excellence.</p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.number}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
