// src/components/ui/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'SOLID Principles/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  args:    { children: 'Hello Button' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
