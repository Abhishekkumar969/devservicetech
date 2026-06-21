"use client";

import { useEffect } from "react";

export default function DisableInspect() {
  useEffect(() => {
    // Disable Right Click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Disable text selection and dragging via CSS on the body
    document.body.style.userSelect = "none";
    document.body.style.WebkitUserSelect = "none";
    document.body.style.msUserSelect = "none";

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.userSelect = "auto";
      document.body.style.WebkitUserSelect = "auto";
      document.body.style.msUserSelect = "auto";
    };
  }, []);

  return null;
}
