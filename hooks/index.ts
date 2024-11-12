import { useEffect, useState } from "react";
import { CHECKOUT_SCREEN_BREAKPOINT } from "../utils/constants";

// Debounce utility
function debounce(func: () => void, wait: number): () => void {
  let timeout: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

// NOT_WORKING (Can't get Window in extensions):
// Custom hook to track if the screen is mobile-sized
export function useIsMobile(breakpoint: number = CHECKOUT_SCREEN_BREAKPOINT, debounceTime: number = 200): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false; // Default to desktop
    return window.innerWidth <= breakpoint;
  });

  useEffect(() => {
    // If `window` is not defined (e.g., during SSR), skip adding the event listener
    if (typeof window === "undefined") return;
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= breakpoint);
    }, debounceTime);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, debounceTime]);

  return isMobile;
}
