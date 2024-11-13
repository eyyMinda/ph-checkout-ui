import {
  reactExtension,
  Image,
  useSettings,
  Spacing,
  View,
  Grid,
  GridItemSize,
  TextBlock,
  BlockLayout
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => <Extension />);

interface settings {
  source_1?: string;
  text_1?: string;
  source_2?: string;
  text_2?: string;
  source_3?: string;
  text_3?: string;
  source_4?: string;
  text_4?: string;
  source_5?: string;
  text_5?: string;
  padding_block?: Spacing;
  padding_inline?: Spacing;
}

function Extension() {
  const {
    source_1,
    text_1,
    source_2,
    text_2,
    source_3,
    text_3,
    source_4,
    text_4,
    source_5,
    text_5,
    padding_block,
    padding_inline
  }: settings = useSettings();

  const items = [
    { source: source_1, text: text_1 },
    { source: source_2, text: text_2 },
    { source: source_3, text: text_3 },
    { source: source_4, text: text_4 },
    { source: source_5, text: text_5 }
  ].filter(item => item.source && item.text);
  const size = sizes[items.length];
  const dynamicColumns = items.map(() => "1fr" as GridItemSize);

  return (
    <Grid
      columns={dynamicColumns}
      rows={"auto"}
      spacing={size.spacing}
      background={"subdued"}
      border={"base"}
      borderRadius={"loose"}
      padding={[padding_block, padding_inline]}>
      {items.map((item, index) => (
        <BlockLayout
          key={index}
          inlineAlignment={"center"}
          spacing={size.spacing}
          padding={["base", "none", "none", "none"]}>
          <View maxInlineSize={size.img} maxBlockSize={size.img}>
            <Image fit="cover" source={item.source} />
          </View>
          <TextBlock size={size.text} appearance={"accent"} inlineAlignment={"center"}>
            {item.text}
          </TextBlock>
        </BlockLayout>
      ))}
    </Grid>
  );
}

const sizes = {
  "1": { img: 100, text: "large", spacing: "tight" },
  "2": { img: 80, text: "medium", spacing: "tight" },
  "3": { img: 60, text: "base", spacing: "tight" },
  "4": { img: 40, text: "small", spacing: "extraTight" },
  "5": { img: 30, text: "extraSmall", spacing: "none" }
};
