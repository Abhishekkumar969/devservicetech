"use client";

import { useEffect, useState } from "react";
import useCartStore from "@/store/cartStore";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Script from "next/script";
import styles from "./page.module.css";
import Link from "next/link";

const projects = [
  { id: "proj_1", title: "E-Commerce Platform", category: "Web Development", desc: "A high-performance online store for a local retail brand.", price: 4999 },
  { id: "proj_2", title: "Healthcare App UI/UX", category: "App Design", desc: "Intuitive appointment booking and tracking application.", price: 2499 },
  { id: "proj_3", title: "Real Estate Portal", category: "Web Design", desc: "Dynamic property listing platform with advanced search.", price: 3999 },
  { id: "proj_4", title: "SEO Campaign Growth", category: "Software Development", desc: "300% organic traffic growth for a local service business.", price: 1999 },
  { id: "proj_5", title: "EduTech Dashboard", category: "Software Development", desc: "Comprehensive LMS dashboard for online tutors.", price: 5999 },
  { id: "proj_6", title: "Restaurant Branding", category: "E-Commerce Solutions", desc: "Complete visual identity and menu design for a modern cafe.", price: 1499 },
];

export default function CartPage() {
  const { cart, removeFromCart, getCartTotal, clearCart, addToCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [suggestedIndex, setSuggestedIndex] = useState(0);
  const router = useRouter();

  // Tiered Discount Logic
  let tieredDiscount = 0;
  cart.forEach((item, index) => {
    if (index === 1) tieredDiscount += Math.round(item.price * 0.15);
    else if (index === 2) tieredDiscount += Math.round(item.price * 0.10);
    else if (index >= 3) tieredDiscount += Math.round(item.price * 0.05);
  });

  const totalGST = Math.round(getCartTotal() * 0.18);
  const baseDiscount = Math.round(getCartTotal() * 0.09);
  const finalTotal = getCartTotal() + totalGST - baseDiscount - tieredDiscount;

  let upsellMessage = "";
  if (cart.length === 1) upsellMessage = "Add one more and get 15% off on the next one!";
  else if (cart.length === 2) upsellMessage = "Add one more to get 10% discount on the next one!";
  else if (cart.length === 3) upsellMessage = "Add one more to get 5% discount on the next one!";
  else if (cart.length >= 4) upsellMessage = "Add more to get 5% discount on the next one!";

  const availableProjects = projects.filter(p => !cart.some(c => c.id === p.id));
  const suggestedProject = availableProjects[suggestedIndex] || availableProjects[0];

  const handleCheckout = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to proceed with checkout.");
      router.push("/login");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalTotal }), // use updated final total
      });
      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "DevService Tech",
        description: "Purchase Digital Projects",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: user.uid,
              items: cart,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            clearCart();
            alert("Payment successful! You can now download your projects from your profile.");
            router.push("/profile");
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: user.displayName || "Customer",
          email: user.email,
        },
        theme: {
          color: "#84cc16",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response){
          alert("Payment Failed: " + response.error.description);
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("An error occurred during checkout.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className={styles.section}>
        <div className="container" style={{ textAlign: "center", padding: "4rem 0" }}>
          <h2>Your Cart is Empty</h2>
          <Link prefetch={false} href="/projects" className="btn btn-primary" style={{ marginTop: "1rem" }}>Browse Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <div className="container">
        <h1 className={styles.title}>Your Cart</h1>
        
        {/* Prominent Upsell Banner and Suggestions */}
        {upsellMessage && (
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ padding: "1rem 2rem", background: "linear-gradient(135deg, var(--primary-light), var(--primary))", borderRadius: "1rem", color: "white", textAlign: "center", boxShadow: "0 10px 25px rgba(132, 204, 22, 0.3)" }}>
              <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>✨ {upsellMessage}</h2>
            </div>
            
            {availableProjects.length > 0 && (
              <div style={{ display: "flex", gap: "1rem", overflowX: "auto", padding: "1rem 0 0.5rem", scrollbarWidth: "thin", scrollbarColor: "var(--primary) transparent" }}>
                {availableProjects.map(project => (
                  <div key={project.id} style={{ minWidth: "280px", maxWidth: "280px", background: "var(--background)", padding: "1rem", borderRadius: "1rem", border: "1px dashed var(--primary)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                    <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{project.title}</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--foreground-muted)", marginBottom: "0.5rem" }}>{project.category}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <strong style={{ color: "var(--primary)", fontSize: "1.1rem" }}>₹{project.price}</strong>
                      <button 
                        onClick={() => addToCart(project)} 
                        className="btn btn-primary" 
                        style={{ padding: "0.4rem 1rem", fontSize: "0.85rem" }}
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className={styles.cartLayout}>
          <div className={styles.itemsList}>
            {cart.map((item, index) => {
              let itemDiscountBadge = "";
              let itemDiscountAmount = 0;
              if (index === 1) { itemDiscountBadge = "15% OFF!"; itemDiscountAmount = Math.round(item.price * 0.15); }
              else if (index === 2) { itemDiscountBadge = "10% OFF!"; itemDiscountAmount = Math.round(item.price * 0.10); }
              else if (index >= 3) { itemDiscountBadge = "5% OFF!"; itemDiscountAmount = Math.round(item.price * 0.05); }

              return (
                <div key={item.id} className={styles.cartItem} style={{ position: "relative" }}>
                  {itemDiscountBadge && (
                    <span style={{ position: "absolute", top: "-10px", right: "-10px", background: "var(--secondary)", color: "white", padding: "0.2rem 0.5rem", borderRadius: "1rem", fontSize: "0.75rem", fontWeight: "bold" }}>
                      {itemDiscountBadge}
                    </span>
                  )}
                  <div className={styles.itemInfo}>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                  <div className={styles.itemPrice}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "1rem" }}>
                      <span style={{ textDecoration: "line-through", color: "var(--foreground-muted)", fontSize: "0.85rem" }}>
                        ₹{Math.round(item.price * 1.35)}
                      </span>
                      {itemDiscountAmount > 0 ? (
                        <>
                          <span style={{ color: "var(--foreground-muted)", fontSize: "0.85rem" }}>
                            ₹{item.price} <span style={{ color: "var(--secondary)" }}>(-₹{itemDiscountAmount})</span>
                          </span>
                          <strong style={{ fontSize: "1.2rem", color: "var(--primary)" }}>₹{item.price - itemDiscountAmount}</strong>
                        </>
                      ) : (
                        <strong style={{ fontSize: "1.2rem", color: "var(--primary)" }}>₹{item.price}</strong>
                      )}
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div>

            <div className={styles.summary}>
              <h3>Order Summary</h3>
              <div className={styles.summaryRow}>
                <span>Items ({cart.length})</span>
                <span>₹{getCartTotal()}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>GST (18%)</span>
                <span>₹{totalGST}</span>
              </div>
              <div className={styles.summaryRow} style={{ color: "var(--primary)" }}>
                <span>Discount</span>
                <span>-₹{baseDiscount}</span>
              </div>
              {tieredDiscount > 0 && (
                <div className={styles.summaryRow} style={{ color: "var(--secondary)" }}>
                  <span>Extra Combo Discount</span>
                  <span>-₹{tieredDiscount}</span>
                </div>
              )}
              
              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
              
              <div style={{ textAlign: "center", color: "#e11d48", fontWeight: "bold", fontSize: "0.9rem", marginTop: "1rem" }}>
                Offer limited buy now!
              </div>
              
              <button 
                onClick={handleCheckout} 
                disabled={loading}
                className="btn btn-primary" 
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                {loading ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
