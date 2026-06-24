import styles from "./PricingPlans.module.css";
import Link from "next/link";

export default function PricingPlans() {
  const plans = [
    {
      name: "Starter Website",
      price: "₹14,999",
      description: "Perfect for small businesses looking to establish an online presence.",
      features: [
        "Up to 5 Pages",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Free Support"
      ],
      isPopular: false
    },
    {
      name: "E-Commerce / Business",
      price: "₹34,999",
      description: "Ideal for growing businesses and online stores needing more power.",
      features: [
        "Up to 15 Pages / Products",
        "Custom UI/UX Design",
        "Payment Gateway Integration",
        "Advanced SEO Optimization",
        "3 Months Free Support"
      ],
      isPopular: true
    },
    {
      name: "Custom Software",
      price: "Custom",
      description: "For enterprises requiring complex web or mobile applications.",
      features: [
        "Unlimited Pages/Features",
        "Custom Backend & API",
        "Dedicated Project Manager",
        "Scalable Cloud Architecture",
        "24/7 Priority Support"
      ],
      isPopular: false
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Transparent <span className="text-gradient">Pricing</span></h2>
          <p className={styles.description}>No hidden fees. Choose a package that fits your business needs, or contact us for a custom quote.</p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div key={index} className={`${styles.card} ${plan.isPopular ? styles.popular : ""}`}>
              {plan.isPopular && <div className={styles.popularBadge}>Most Popular</div>}
              
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.price}>{plan.price}</div>
              <p className={styles.planDesc}>{plan.description}</p>
              
              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link prefetch={false} href="/contact" className={`btn ${plan.isPopular ? "btn-primary" : "btn-outline"} ${styles.btn}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
