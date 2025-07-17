
import type { Meta, StoryObj } from '@storybook/react';
import PageLayout from './PageLayout';
import { ThemeProvider } from '../../../theme/themeContext';

const meta = {
  title: 'SOLID/PageLayout (SRP + DIP)',
  component: PageLayout,
  decorators: [
    (Story) => (
      <ThemeProvider theme={{ primary: '#e91e63', background: '#fce4ec' }}>
        <Story />
      </ThemeProvider>
    ),
  ],
  // children is required by PageLayout's props type
  args: {
    children: (
      <div>
        <h2>Main Content Area</h2>
        <p>This demonstrates SRP in each layout piece, plus DIP via ThemeProvider.</p>
      </div>
    ),
  },
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {} // uses the default `children` from meta
};
