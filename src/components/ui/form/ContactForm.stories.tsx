// src/components/ui/form/ContactForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from './ContactForm';

const meta = {
  title: 'SOLID/ContactForm (ISP)',
  component: ContactForm,
  args: {},    // no props
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
