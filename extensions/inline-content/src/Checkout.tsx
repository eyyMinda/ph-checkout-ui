import {
  reactExtension,
  Image,
  useSettings,
  Spacing,
  View,
  Background,
  BorderStyle,
  CornerRadius,
  Alignment,
  InlineStack,
  TextBlock
} from "@shopify/ui-extensions-react/checkout";
import { Emphasis, TextSize } from "@shopify/ui-extensions/src/surfaces/checkout/components/shared";
import { normalizeImageSize } from "lib/utils";
export default reactExtension("purchase.checkout.block.render", () => <Extension />);

interface settings {
  background?: Background;
  border?: BorderStyle;
  borderRadius?: CornerRadius;
  inlineAlignment?: Alignment;
  blockAlignment?: Alignment;
  spacing?: Spacing;
  source_pre?: string;
  source_pre_width?: number;
  source_pre_height?: number;
  source_app?: string;
  source_app_width?: number;
  source_app_height?: number;
  text?: string;
  text_size?: TextSize;
  text_style?: Emphasis | "normal";
  text_appearance?: TextAppearance | "normal";
  padding_block?: Spacing;
  padding_inline?: Spacing;
}

function Extension() {
  const {
    background,
    border,
    borderRadius,
    inlineAlignment,
    blockAlignment,
    spacing,
    source_pre,
    source_pre_width,
    source_pre_height,
    source_app,
    source_app_width,
    source_app_height,
    text,
    text_size,
    text_style,
    text_appearance,
    padding_block = "none",
    padding_inline = "none"
  }: settings = useSettings();

  const attributes = {
    background,
    border,
    borderRadius,
    inlineAlignment,
    blockAlignment,
    spacing,
    padding: [padding_block, padding_inline] as [Spacing, Spacing]
  };
  const textAttributes = { size: text_size };
  if (text_style !== "normal") textAttributes["emphasis"] = text_style;
  if (text_appearance !== "normal") textAttributes["appearance"] = text_appearance;

  return (
    <InlineStack {...attributes}>
      {source_pre && (
        <View maxInlineSize={normalizeImageSize(source_pre_width)} maxBlockSize={normalizeImageSize(source_pre_height)}>
          <Image fit="cover" source={source_pre} />
        </View>
      )}
      <TextBlock {...textAttributes}>{text}</TextBlock>
      {source_app && (
        <View maxInlineSize={normalizeImageSize(source_app_width)} maxBlockSize={normalizeImageSize(source_app_height)}>
          <Image fit="cover" source={source_app} />
        </View>
      )}
    </InlineStack>
  );
}

type TextAppearance = "accent" | "subdued" | "info" | "success" | "warning" | "critical" | "decorative";
