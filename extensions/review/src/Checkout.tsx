import {
  reactExtension,
  Image,
  useSettings,
  InlineStack,
  Spacing,
  View,
  BlockStack,
  TextBlock,
  Text,
  Grid
} from "@shopify/ui-extensions-react/checkout";
import { validateSpacing } from "helpers";

export default reactExtension("purchase.checkout.block.render", () => <Extension />);

interface settings {
  author_source?: string;
  text?: string;
  stars?: string;
  author?: string;
  date?: string;
  padding_block?: Spacing;
  padding_inline?: Spacing;
}

function Extension() {
  const { author_source, text, stars, author, date, padding_block, padding_inline }: settings = useSettings();

  // Runtime check to ensure values are valid
  const validatedPaddingBlock = validateSpacing(padding_block) ? padding_block : "none";
  const validatedPaddingInline = validateSpacing(padding_inline) ? padding_inline : "none";

  return (
    <Grid
      columns={["12%", "fill"]}
      rows={"auto"}
      spacing="base"
      border={"base"}
      borderRadius={"loose"}
      padding={[validatedPaddingBlock, validatedPaddingInline]}>
      {author_source && (
        <View maxInlineSize={60} maxBlockSize={60} padding={["tight", "none"]}>
          <Image fit="cover" source={author_source} aspectRatio={1} cornerRadius={"fullyRounded"} />
        </View>
      )}
      <BlockStack spacing={"tight"}>
        <TextBlock size={"medium"}>{text}</TextBlock>
        <Grid columns={["auto", "auto", "auto"]} rows={"auto"} spacing={"tight"} blockAlignment={"center"}>
          {stars && (
            <View maxInlineSize={80}>
              <Image fit="contain" source={stars} cornerRadius="none" />
            </View>
          )}
          <Text size={"small"}>{author}</Text>
          <Text size={"extraSmall"} appearance={"subdued"}>
            {date}
          </Text>
        </Grid>
      </BlockStack>
    </Grid>
  );
}
