"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CopyrightText() {
  const [clicks, setClicks] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 5) {
      router.push("/linksget");
      setClicks(0); // reset
    }
  };

  return (
    <p>
      Copyright&copy;2026{" "}
      <span onClick={handleClick} style={{ userSelect: "none" }}>
        DevService
      </span>
      Tech (Development and service technology). All rights reserved
    </p>
  );
}
