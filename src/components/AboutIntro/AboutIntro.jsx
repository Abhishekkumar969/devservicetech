import styles from "./AboutIntro.module.css";

export default function AboutIntro({ city = "India" }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Website Design & Software Development<br />Company in {city}
        </h2>
        <p className={styles.description}>
          Build Your Online Presence with DevService Tech (Development and service technology) - Trusted by 100+ Businesses in {city}. DevService Tech (Development and service technology) is a top-rated digital agency in {city}, specializing in website design, SEO services, software development, api integration, e-commerce solutions, logo design, e-commerce website development, and custom software solutions. We deliver fast, mobile-friendly, and SEO-optimized websites that help businesses grow online. Our expert team ensures creative, result-driven digital solutions tailored to your goals. Are you looking to elevate your online presence and unlock the full potential of your business? Look no further! DevService Tech (Development and service technology) is your one-stop solution for all things web design, development, and software development. As one of the best website design and software development companies in {city}, we help businesses of all sizes transform their digital identity, drive traffic, and convert visitors into loyal customers. A great website is just the beginning. To stand out in today's saturated online marketplace, you need a solid software development strategy. At DevService Tech (Development and service technology), we specialize in a wide range of software development services designed to increase your online visibility, drive qualified traffic, and boost your ROI. At DevService Tech (Development and service technology), we believe that a successful digital strategy goes beyond just great design. SEO is the backbone of any online business, and we specialize in creating SEO-optimized websites that help you climb the ranks on search engines like Google.
        </p>
      </div>
    </section>
  );
}
