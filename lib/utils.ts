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
