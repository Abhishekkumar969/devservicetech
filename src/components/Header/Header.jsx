"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import styles from "./Header.module.css";
import useCartStore from "@/store/cartStore";

export default function Header() {
  const pathname = usePathname();
  const cart = useCartStore((state) => state.cart);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  useEffect(() => {
    import("@/lib/firebase").then(({ auth }) => {
      import("firebase/auth").then(({ onAuthStateChanged }) => {
        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      });
    });
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "OUR SERVICES", path: "/services" },
    { name: "OUR PROJECTS", path: "/projects" },
    { name: "INTERNSHIP", path: "/internship" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <Link prefetch={false} href="/" className={styles.logoContainer}>
            <div className={styles.logoTextWrapper}>
              <span className={styles.logoMain}>DevService</span>
              <span className={styles.logoSub}>TECH</span>
            </div>

          </Link>

          <ul className={styles.menu}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  prefetch={false}
                  href={link.path}
                  className={`${styles.menuItem} ${
                    pathname === link.path ? styles.active : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {user ? (
              <>
                <li>
                  <Link
                    prefetch={false}
                    href="/cart"
                    className={`${styles.menuItem} ${
                      pathname === "/cart" ? styles.active : ""
                    }`}
                    style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                  >
                    <ShoppingCart size={20} /> ({cartCount})
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    href="/profile"
                    className={`${styles.menuItem} ${
                      pathname === "/profile" ? styles.active : ""
                    }`}
                    style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                    aria-label="Profile"
                  >
                    <User size={20} /> PROFILE
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  prefetch={false}
                  href="/login"
                  className={`${styles.menuItem} ${
                    pathname === "/login" ? styles.active : ""
                  }`}
                >
                  LOGIN
                </Link>
              </li>
            )}
          </ul>

          <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
