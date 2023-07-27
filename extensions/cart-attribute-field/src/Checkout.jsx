import {
  Banner,
  BlockStack,
  TextField,
  useApi,
  useTranslate,
  useAttributeValues,
  useApplyAttributeChange,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const applyAttributeChange = useApplyAttributeChange();
  const [testAttributeValue] = useAttributeValues(['test']);
  console.log('testAttributeValue', testAttributeValue);

  return (
    <BlockStack>
      <Banner title="cart-attribute-field">
        {translate('welcome', {target: extension.target})}
      </Banner>
      <TextField
        label="Attribute [test] value"
        multiline={3}
        onChange={(value) => {
          // Apply the change to the metafield
          applyAttributeChange({
            type: "updateAttribute",
            key: "test",
            value,
          });
        }}
        value={testAttributeValue}
      />

    </BlockStack>
  );
}