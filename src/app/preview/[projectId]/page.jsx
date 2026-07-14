"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FiMonitor, FiTablet, FiSmartphone, FiArrowLeft, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function PreviewPage() {
  const params = useParams();
  const router = useRouter();
  const [deviceView, setDeviceView] = useState("desktop");
  const [mounted, setMounted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("https://devservicetech.com/");
  const [loading, setLoading] = useState(true);

  const projectId = params?.projectId;

  useEffect(() => {
    setMounted(true);
    const fetchPreviewUrl = async () => {
      if (!projectId) return;
      try {
        const docRef = doc(db, "Products", projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.previewUrl) {
            setPreviewUrl(data.previewUrl);
          }
        }
      } catch (err) {
        console.error("Error fetching preview url:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPreviewUrl();
  }, [projectId]);

  if (!mounted) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f1f5f9" }}>
      {/* Top Bar */}
      <header style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "1rem 2rem", 
        backgroundColor: "white", 
        borderBottom: "1px solid #e2e8f0" 
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={() => router.back()} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b" }}>
            <FiArrowLeft /> Back
          </button>
          <h1 style={{ fontSize: "1.25rem", margin: 0, fontWeight: "600", color: "#0f172a" }}>Project Preview</h1>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", background: "#f8fafc", padding: "0.25rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
          <button 
            onClick={() => setDeviceView("desktop")}
            style={{ 
              background: deviceView === "desktop" ? "white" : "transparent",
              color: deviceView === "desktop" ? "#0f172a" : "#64748b",
              border: "none", padding: "0.5rem 1rem", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem",
              boxShadow: deviceView === "desktop" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
            }}
          >
            <FiMonitor /> Desktop
          </button>
          <button 
            onClick={() => setDeviceView("tablet")}
            style={{ 
              background: deviceView === "tablet" ? "white" : "transparent",
              color: deviceView === "tablet" ? "#0f172a" : "#64748b",
              border: "none", padding: "0.5rem 1rem", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem",
              boxShadow: deviceView === "tablet" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
            }}
          >
            <FiTablet /> Tablet
          </button>
          <button 
            onClick={() => setDeviceView("mobile")}
            style={{ 
              background: deviceView === "mobile" ? "white" : "transparent",
              color: deviceView === "mobile" ? "#0f172a" : "#64748b",
              border: "none", padding: "0.5rem 1rem", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem",
              boxShadow: deviceView === "mobile" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
            }}
          >
            <FiSmartphone /> Mobile
          </button>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a href={previewUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#3b82f6", textDecoration: "none", fontWeight: "500" }}>
            Open in new tab <FiExternalLink />
          </a>
          <Link href={`/checkout/${projectId}`} className="btn btn-primary" style={{ padding: "0.5rem 1.5rem", borderRadius: "6px", background: "var(--primary)", color: "white", textDecoration: "none", fontWeight: "600" }}>
            Buy Now
          </Link>
        </div>
      </header>

      {/* Iframe Container */}
      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem", overflow: "hidden" }}>
        <div style={{ 
          width: deviceView === "mobile" ? "375px" : deviceView === "tablet" ? "768px" : "100%", 
          height: "100%", 
          transition: "width 0.3s ease-in-out",
          background: "white",
          borderRadius: deviceView === "desktop" ? "0" : "24px",
          boxShadow: deviceView === "desktop" ? "none" : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          border: deviceView === "desktop" ? "none" : "12px solid #1e293b",
          boxSizing: "border-box"
        }}>
          <iframe 
            src={previewUrl} 
            style={{ width: "100%", height: "100%", border: "none" }}
            title="Project Preview"
          />
        </div>
      </main>
    </div>
  );
}
