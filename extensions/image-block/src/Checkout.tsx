import {
  reactExtension,
  Image,
  useSettings,
  InlineStack,
  Spacing,
  View,
  Alignment
} from "@shopify/ui-extensions-react/checkout";
import { displayDesktopStyle, displayMobileStyle, normalizeImageSize } from "lib/utils";

export default reactExtension("purchase.checkout.block.render", () => <Extension />);

interface settings {
  source?: string;
  source_mb?: string;
  inline_size?: number;
  inline_position?: Alignment;
  padding_block?: Spacing;
  padding_inline?: Spacing;
}

function Extension() {
  const {
    source,
    source_mb,
    inline_size,
    inline_position = "start",
    padding_block,
    padding_inline
  }: settings = useSettings();

  return (
    <InlineStack padding={[padding_block, padding_inline]} inlineAlignment={inline_position}>
      {[
        { imgSource: source, style: displayDesktopStyle },
        { imgSource: source_mb, style: displayMobileStyle }
      ].map(
        ({ style, imgSource }, index) =>
          imgSource && (
            <View key={index} display={style} maxInlineSize={normalizeImageSize(inline_size, 556)}>
              <Image fit="contain" source={imgSource} cornerRadius="none" />
            </View>
          )
      )}
    </InlineStack>
  );
}
