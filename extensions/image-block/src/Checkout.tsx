import { reactExtension, Image, useSettings, InlineStack, Spacing, View } from "@shopify/ui-extensions-react/checkout";
import { displayDesktopStyle, displayMobileStyle, validateSpacing } from "helpers";

export default reactExtension("purchase.checkout.block.render", () => <Extension />);

interface settings {
  source?: string;
  source_mb?: string;
  padding_block?: Spacing;
  padding_inline?: Spacing;
}

function Extension() {
  const { source, source_mb, padding_block, padding_inline }: settings = useSettings();

  // Runtime check to ensure values are valid
  const validatedPaddingBlock = validateSpacing(padding_block) ? padding_block : "none";
  const validatedPaddingInline = validateSpacing(padding_inline) ? padding_inline : "none";

  return (
    <InlineStack padding={[validatedPaddingBlock, validatedPaddingInline]}>
      {source && (
        <View display={displayDesktopStyle}>
          <Image fit="contain" source={source} cornerRadius="none" />
        </View>
      )}
      {source_mb && (
        <View display={displayMobileStyle}>
          <Image fit="contain" source={source_mb} cornerRadius="none" />
        </View>
      )}
    </InlineStack>
  );
}
