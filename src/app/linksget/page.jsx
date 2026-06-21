import { variations, citiesList, createSlug, totalSeoPages } from "@/utils/seoSequence";
import Link from "next/link";
import styles from "./linksget.module.css";

export const metadata = {
  title: "All SEO Links",
  robots: "noindex, nofollow"
};

export default function LinksGetPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>All Generated SEO Links</h1>
      <p className={styles.totalLinks}>Total Links: <strong>{totalSeoPages.toLocaleString('en-IN')}</strong></p>

      {variations.map((variation, index) => {
        const categoryLinks = citiesList.slice(0, 50).map(city => ({
          title: `${variation} ${city}`,
          slug: createSlug(variation, city)
        }));

        return (
          <div key={index} className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle}>{variation}</h2>
            <p className={styles.categoryCount}>Links in this category: {citiesList.length.toLocaleString('en-IN')} (Showing top 50)</p>
            <ul className={styles.linksList}>
              {categoryLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={`/${link.slug}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
