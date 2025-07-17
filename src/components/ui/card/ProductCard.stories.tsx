// src/components/ui/card/ProductCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';
import helmetImg from '../../../assets/images/helmet.png'
const meta = {
  title: 'Card Variants/ProductCard',
  component: ProductCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Space Helmet X24',
    imageUrl: helmetImg,
    inStock: true,
    price: 120,
    description: 'A sleek, durable motorcycle helmet with anti-fog visor and stylish graphics.',
    materials: 'ABS shell, polycarbonate visor, memory foam padding.',
    colors: ['#ffffff', '#222222', '#ffc107'],
    backgroundColor: '#e5e7eb',
  },
};
