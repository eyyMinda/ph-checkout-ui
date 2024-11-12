import { CHECKOUT_SCREEN_BREAKPOINT } from "../utils/constants";

// Debounce utility
export function debounce(func: () => void, wait: number): () => void {
  let timeout: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}
