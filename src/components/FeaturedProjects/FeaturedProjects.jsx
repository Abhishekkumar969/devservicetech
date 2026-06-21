"use client";

import Link from "next/link";
import styles from "./FeaturedProjects.module.css";
import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation";

const projects = [
  { id: "proj_1", title: "E-Commerce Platform", category: "Web Development", desc: "A high-performance online store for a local retail brand.", price: 4999 },
  { id: "proj_2", title: "Healthcare App UI/UX", category: "App Design", desc: "Intuitive appointment booking and tracking application.", price: 2499 },
  { id: "proj_4", title: "SEO Campaign Growth", category: "Software Development", desc: "300% organic traffic growth for a local service business.", price: 1999 },
];

export default function FeaturedProjects() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured <span className="text-gradient">Products & Projects</span></h2>
          <p className={styles.description}>
            Explore our ready-to-deploy digital products and premium source codes to kickstart your next big idea.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardImage}>
                [ Project Image ]
              </div>
              <div className={styles.cardBody}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span className={styles.category}>{project.category}</span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ textDecoration: "line-through", color: "var(--foreground-muted)", fontSize: "0.85rem", marginRight: "0.5rem" }}>
                      ₹{Math.round(project.price * 1.35)}
                    </span>
                    <strong style={{ fontSize: "1.2rem", color: "var(--primary)" }}>₹{project.price}</strong>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <Link href="/projects" className="btn btn-outline" style={{ width: "100%" }}>
                  View All Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
