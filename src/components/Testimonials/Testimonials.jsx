import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "CEO, TechStart",
      text: "DevService Tech completely transformed our online presence. Our new website is not only beautiful but also incredibly fast. We've seen a 40% increase in conversions since launch.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Founder, Bloom Boutique",
      text: "The e-commerce platform they built for us is flawless. The team was responsive, professional, and delivered beyond our expectations. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Marketing Director",
      text: "Their SEO and digital marketing strategies helped us rank on the first page of Google within months. We are getting consistent, high-quality leads every day.",
      rating: 5,
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients <span className="text-gradient">Say</span></h2>
          <p className={styles.description}>Don't just take our word for it. Here's what businesses we've worked with have to say about our services.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map(t => (
            <div key={t.id} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
