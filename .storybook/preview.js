// .storybook/preview.js
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  layout: 'centered',
};
