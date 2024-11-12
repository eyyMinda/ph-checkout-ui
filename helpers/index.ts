import { Spacing, Style, Display, MaybeResponsiveConditionalStyle } from "@shopify/ui-extensions-react/checkout";

// Helper function to validate Spacing at runtime
export function validateSpacing(value: unknown): value is Spacing {
  return ["none", "extraTight", "tight", "base", "loose", "extraLoose"].includes(value as Spacing);
}

export const displayDesktopStyle: MaybeResponsiveConditionalStyle<Display> = Style.default<Display>("none").when(
  { viewportInlineSize: { min: "medium" } },
  "block"
);
export const displayMobileStyle: MaybeResponsiveConditionalStyle<Display> = Style.default<Display>("block").when(
  { viewportInlineSize: { min: "medium" } },
  "none"
);
