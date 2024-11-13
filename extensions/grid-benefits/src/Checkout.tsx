import {
  reactExtension,
  Image,
  useSettings,
  Spacing,
  View,
  Grid,
  GridItemSize,
  TextBlock,
  BlockStack,
  BlockLayout,
  InlineStack
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => <Extension />);

interface settings {
  source_1?: string;
  text_1?: string;
  source_2?: string;
  text_2?: string;
  source_3?: string;
  text_3?: string;
  padding_block?: Spacing;
  padding_inline?: Spacing;
}

function Extension() {
  const { source_1, text_1, source_2, text_2, source_3, text_3, padding_block, padding_inline }: settings =
    useSettings();

  const items = [
    { source: source_1, text: text_1 },
    { source: source_2, text: text_2 },
    { source: source_3, text: text_3 }
  ].filter(item => item.source && item.text); // Filter out invalid entries

  const dynamicColumns = items.map(() => "1fr" as GridItemSize);
  return (
    <Grid
      columns={dynamicColumns}
      rows={"auto"}
      spacing={"tight"}
      background={"subdued"}
      border={"base"}
      borderRadius={"loose"}
      padding={[padding_block, padding_inline]}>
      {items.map((item, index) => (
        <BlockLayout
          key={index}
          inlineAlignment={"center"}
          spacing={"tight"}
          padding={["base", "none", "none", "none"]}>
          <View maxInlineSize={60} maxBlockSize={60}>
            <Image fit="cover" source={item.source} />
          </View>
          <TextBlock size="base" appearance={"accent"} inlineAlignment={"center"}>
            {item.text}
          </TextBlock>
        </BlockLayout>
      ))}
    </Grid>
  );
}
