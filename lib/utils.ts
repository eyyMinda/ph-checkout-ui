import { Style, Display, MaybeResponsiveConditionalStyle } from "@shopify/ui-extensions-react/checkout";
import { CHECKOUT_SCREEN_BREAKPOINT } from "./constants";

export const displayDesktopStyle: MaybeResponsiveConditionalStyle<Display> = Style.default<Display>("none").when(
  { viewportInlineSize: { min: "medium" } },
  "block"
);
export const displayMobileStyle: MaybeResponsiveConditionalStyle<Display> = Style.default<Display>("block").when(
  { viewportInlineSize: { min: "medium" } },
  "none"
);

// Debounce utility
export function debounce(func: () => void, wait: number): () => void {
  let timeout: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}
export const normalizeImageSize = (size: number | undefined, defaultSize: number = 80): number =>
  size && size >= 10 ? size : defaultSize;

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const pad = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return `${pad(minutes)} : ${pad(remainingSeconds)}`;
};
