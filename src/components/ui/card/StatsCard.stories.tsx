import type { Meta, StoryObj } from '@storybook/react';
import StatsCard from './StatsCard';

const meta: Meta<typeof StatsCard> = {
  title: 'Card Variants/StatsCard',
  component: StatsCard,
  args: {
    label: 'Score',
    value: 42,
  },
};

export default meta;
type Story = StoryObj<typeof StatsCard>;

export const Default: Story = {};
