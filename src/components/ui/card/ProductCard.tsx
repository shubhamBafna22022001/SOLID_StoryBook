// src/components/ui/card/ProductCard.tsx
import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import Button from '../Button/Button'; // ✅ Import reusable Button

export type ProductCardProps = {
  title: string;
  imageUrl: string;
  inStock: boolean;
  price: number;
  description: string;
  materials: string;
  colors: string[];
  backgroundColor?: string;
};

type CartItem = {
  title: string;
  price: number;
  color: string;
};

export default function ProductCard({
  title,
  imageUrl,
  inStock,
  price,
  description,
  materials,
  colors,
  backgroundColor = '#f2f4f7',
}: ProductCardProps) {
  const [selectedTab, setSelectedTab] = useState<'description' | 'materials'>('description');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [liked, setLiked] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addedToCart, setAddedToCart] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const addToCart = () => {
    const newItem: CartItem = {
      title,
      price,
      color: selectedColor,
    };
    setCart((prev) => [...prev, newItem]);
    setAddedToCart(true);
    console.log('🛒 Cart:', [...cart, newItem]);

    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className={styles.productCard} style={{ backgroundColor }}>
      <img className={styles.productImg} src={imageUrl} alt={title} />

      <div className={styles.productContent}>
        <h2>{title}</h2>
        <p className={styles.stock}>{inStock ? 'In stock' : 'Out of stock'}</p>

        <div className={styles.colorOptions}>
          {colors.map((color) => (
            <span
              key={color}
              className={`${styles.colorDot} ${selectedColor === color ? styles.selected : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        <div className={styles.priceRow}>
          <p className={styles.price}>${price.toFixed(2)}</p>

          {/* ✅ Reusable Button for Like */}
          <Button onClick={toggleLike}>
            <span className={liked ? styles.liked : styles.wishlist}>
              {liked ? '❤️' : '♡'}
            </span>
          </Button>

          {/* ✅ Reusable Button for Add to Cart */}
          <Button onClick={addToCart} disabled={addedToCart}>
            {addedToCart ? 'Added ✓' : 'Add to cart'}
          </Button>
        </div>

        <div className={styles.tabs}>
          <span
            className={selectedTab === 'description' ? styles.active : ''}
            onClick={() => setSelectedTab('description')}
          >
            Description
          </span>
          <span
            className={selectedTab === 'materials' ? styles.active : ''}
            onClick={() => setSelectedTab('materials')}
          >
            Materials
          </span>
        </div>

        <p className={styles.tabText}>
          {selectedTab === 'description' ? description : materials}
        </p>
      </div>
    </div>
  );
}
