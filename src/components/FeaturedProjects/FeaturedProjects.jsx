"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./FeaturedProjects.module.css";
import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation";

export default function FeaturedProjects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const productsRef = collection(db, 'Products');
        const snapshot = await getDocs(productsRef);
        const projectsData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.isActive) {
            projectsData.push({ id: doc.id, ...data });
          }
        });
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  if (loading) return null; // Can replace with skeleton loader
  if (projects.length === 0) return null;

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
              <div className={styles.cardImage} style={{ background: project.imageUrl ? `url(${project.imageUrl}) center/cover no-repeat` : '#e2e8f0' }}>
                {!project.imageUrl && <span style={{ color: '#94a3b8' }}>[ Project Image ]</span>}
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
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                  <Link href={`/preview/${project.id}`} className="btn btn-outline" style={{ flex: 1, textAlign: "center", padding: "0.5rem" }}>
                    Live Preview
                  </Link>
                  <Link href={`/checkout/${project.id}`} className="btn btn-primary" style={{ flex: 1, textAlign: "center", padding: "0.5rem" }}>
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
