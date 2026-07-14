"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import QRCode from "react-qr-code";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  
  const projectId = params?.projectId;
  const [project, setProject] = useState(null);
  const [paymentConfig, setPaymentConfig] = useState(null);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!projectId) return;
      try {
        // Fetch product
        const productRef = doc(db, 'Products', projectId);
        const productSnap = await getDoc(productRef);
        
        if (productSnap.exists()) {
          setProject({ id: productSnap.id, ...productSnap.data() });
        } else {
          setProject({ title: "Custom Project", price: 0 }); // Fallback
        }

        // Fetch Payment Config
        const settingsRef = doc(db, 'Settings', 'payment');
        const settingsSnap = await getDoc(settingsRef);
        if (settingsSnap.exists()) {
          setPaymentConfig(settingsSnap.data());
        }
      } catch (error) {
        console.error("Error fetching checkout data:", error);
      } finally {
        setFetchingData(false);
      }
    };
    fetchData();
  }, [projectId]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referenceId: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "Purchases"), {
        ...formData,
        projectId: projectId,
        projectTitle: project.title,
        amount: project.price,
        status: "Pending Verification",
        createdAt: new Date()
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting purchase:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f8fafc", padding: "2rem" }}>
        <div style={{ background: "white", padding: "3rem", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", textAlign: "center", maxWidth: "500px" }}>
          <div style={{ fontSize: "3rem", color: "#22c55e", marginBottom: "1rem" }}>✓</div>
          <h1 style={{ fontSize: "1.5rem", color: "#0f172a", marginBottom: "1rem" }}>Payment Details Submitted!</h1>
          <p style={{ color: "#64748b", marginBottom: "2rem" }}>
            Thank you! We will verify your Reference ID ({formData.referenceId}). Once verified, we will send the project files to your email and WhatsApp shortly.
          </p>
          <button onClick={() => router.push("/")} className="btn btn-primary" style={{ padding: "0.75rem 2rem", borderRadius: "8px" }}>
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  if (fetchingData) {
    return <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading project details...</div>;
  }

  const upiId = paymentConfig?.upiId || "payments@devservicetech";
  const upiUri = `upi://pay?pa=${upiId}&pn=DevServiceTech&am=${project?.price || 0}&cu=INR`;

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "2rem", textAlign: "center" }}>Checkout</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          
          {/* Order Summary & Payment */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "16px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: "1.25rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem", marginBottom: "1rem" }}>Order Summary</h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <span style={{ color: "#64748b", fontWeight: "500" }}>{project?.title}</span>
              <strong style={{ color: "#0f172a" }}>₹{project?.price}</strong>
            </div>
            
            <h2 style={{ fontSize: "1.25rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem", marginBottom: "1rem", marginTop: "2rem" }}>Payment via UPI</h2>
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "white", padding: "1rem", border: "1px solid #e2e8f0", display: "inline-block", margin: "0 auto 1rem auto", borderRadius: "8px" }}>
                <QRCode value={upiUri} size={180} />
              </div>
              <p style={{ fontWeight: "600", color: "#0f172a" }}>UPI ID: {upiId}</p>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem" }}>Scan and pay ₹{project?.price} using any UPI app.</p>
            </div>
          </div>

          {/* User Form */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "16px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: "1.25rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem", marginBottom: "1rem" }}>Your Details</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#475569" }}>Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #cbd5e1" }} />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#475569" }}>Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #cbd5e1" }} />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#475569" }}>Phone / WhatsApp Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #cbd5e1" }} />
              </div>
              
              <div style={{ marginTop: "1rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: "600", color: "#0f172a" }}>UPI Reference Number (RRN)</label>
                <p style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "0.5rem" }}>Enter the 12-digit reference number after making the payment.</p>
                <input required type="text" name="referenceId" placeholder="e.g. 312345678901" value={formData.referenceId} onChange={handleChange} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "2px solid #3b82f6", outline: "none" }} />
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: "1rem", borderRadius: "8px", marginTop: "1rem", fontWeight: "600" }}>
                {loading ? "Submitting..." : "Submit Payment Details"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
