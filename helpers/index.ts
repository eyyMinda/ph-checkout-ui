import { Style, Display, MaybeResponsiveConditionalStyle } from "@shopify/ui-extensions-react/checkout";

export const displayDesktopStyle: MaybeResponsiveConditionalStyle<Display> = Style.default<Display>("none").when(
  { viewportInlineSize: { min: "medium" } },
  "block"
);
export const displayMobileStyle: MaybeResponsiveConditionalStyle<Display> = Style.default<Display>("block").when(
  { viewportInlineSize: { min: "medium" } },
  "none"
);
