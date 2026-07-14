"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './OurBrands.module.css';

export default function OurBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brandsRef = collection(db, 'Brands');
        const snapshot = await getDocs(brandsRef);
        const brandsData = [];
        snapshot.forEach((doc) => {
          brandsData.push({ id: doc.id, ...doc.data() });
        });
        setBrands(brandsData);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBrands();
  }, []);

  if (loading) return null; // Or a subtle skeleton loader if preferred
  if (brands.length === 0) return null; // Hide section entirely if no brands

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Brands We've Worked With</h2>
        <div className={styles.brandsContainer}>
          {brands.map((brand) => (
            <Link key={brand.id} href={brand.url} target="_blank" rel="noopener noreferrer" className={styles.brandCard} style={{ textDecoration: 'none' }}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={brand.image} 
                  alt={brand.heading} 
                  width={150} 
                  height={150} 
                  className={styles.image}
                  unoptimized
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={styles.brandName} style={{ margin: '0.5rem 0 0.25rem 0', fontSize: '1.25rem', color: '#1e293b' }}>{brand.heading}</h3>
              {brand.description && (
                <p style={{ margin: '0', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>
                  {brand.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
