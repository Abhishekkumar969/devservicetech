"use client";
import { useState } from "react";
import styles from "./HomeFAQ.module.css";

export default function HomeFAQ() {
  const faqs = [
    {
      q: "How much does a website cost?",
      a: "The cost depends on your specific requirements. A simple landing page starts at ₹14,999, while custom e-commerce or complex software applications will vary based on features and scale."
    },
    {
      q: "Do you provide SEO services?",
      a: "Yes! We build all our websites with SEO best practices. We also offer dedicated monthly SEO campaigns to help you rank on the first page of Google."
    },
    {
      q: "How long does it take to build a website?",
      a: "A standard business website typically takes 2-4 weeks from start to finish. Larger custom software projects or complex e-commerce stores can take 2-3 months."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Absolutely. 100% of the websites we build are fully responsive, meaning they will look and function perfectly on smartphones, tablets, and desktops."
    },
    {
      q: "Do you provide hosting and maintenance?",
      a: "Yes, we offer reliable web hosting and ongoing maintenance packages to keep your website secure, fast, and up-to-date."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className={styles.description}>
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            >
              <div className={styles.question}>
                <h3>{faq.q}</h3>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={styles.answer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
