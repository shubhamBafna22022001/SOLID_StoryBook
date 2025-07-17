import type { Meta, StoryObj } from '@storybook/react';
import ProfileCard from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'Card Variants/ProfileCard',
  component: ProfileCard,
  args: {
    name: 'Alice',
    role: 'Developer',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};
export const Manager: Story = {
  args: {
    name: 'Bob',
    role: 'Manager',
  },
};
