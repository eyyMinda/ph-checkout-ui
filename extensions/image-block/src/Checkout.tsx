import { reactExtension, Image, useSettings, InlineStack, Spacing, View } from "@shopify/ui-extensions-react/checkout";
import { displayDesktopStyle, displayMobileStyle } from "lib/utils";

export default reactExtension("purchase.checkout.block.render", () => <Extension />);

interface settings {
  source?: string;
  source_mb?: string;
  padding_block?: Spacing;
  padding_inline?: Spacing;
}

function Extension() {
  const { source, source_mb, padding_block, padding_inline }: settings = useSettings();

  return (
    <InlineStack padding={[padding_block, padding_inline]}>
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
