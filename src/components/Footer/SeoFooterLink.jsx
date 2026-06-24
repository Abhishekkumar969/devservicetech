"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNextSeoInfo } from "@/utils/seoSequence";
import { useEffect, useState } from "react";

export default function SeoFooterLink() {
  const pathname = usePathname();
  const [nextInfo, setNextInfo] = useState(null);

  useEffect(() => {
    // pathname might be "/" or "/website-designers-company-in-pune"
    // remove leading slash
    const currentSlug = pathname.replace(/^\//, "");
    const info = getNextSeoInfo(currentSlug);
    setNextInfo(info);
  }, [pathname]);

  if (!nextInfo) return null;

  return (
    <div style={{ padding: "10px", textAlign: "center", fontSize: "0.85rem", opacity: 0.6 }}>
      <Link prefetch={false} href={`/${nextInfo.slug}`} style={{ textDecoration: "underline" }}>{nextInfo.title}</Link>
    </div>
  );
}
