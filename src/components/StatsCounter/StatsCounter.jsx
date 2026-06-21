"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./StatsCounter.module.css";

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    { label: "Projects Completed", value: 120, suffix: "+" },
    { label: "Happy Clients", value: 50, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Support Available", value: 24, suffix: "/7" }
  ];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.value}>
              {isVisible ? (
                <CountUp end={stat.value} duration={2000} />
              ) : (
                "0"
              )}
              {stat.suffix}
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Simple CountUp component since we don't want to install new dependencies
function CountUp({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
}
