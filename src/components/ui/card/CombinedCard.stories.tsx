// src/components/ui/card/CombinedCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProfileCard from './ProfileCard';
import StatsCard from './StatsCard';

const meta: Meta = {
  title: 'Card Variants (OCP + LSP)/CombinedCard',
  // remove `component` entirely since you’re rendering multiple components manually
};

export default meta;

type Story = StoryObj;

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <ProfileCard name="Alice" role="Engineer" />
      <StatsCard label="Rating" value={95} />
    </div>
  ),
};
