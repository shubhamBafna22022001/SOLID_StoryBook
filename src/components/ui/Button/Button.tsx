// src/components/ui/Button/Button.tsx
import React from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean; // ✅ Add this line
};

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => (
  <button onClick={onClick} disabled={disabled} className={styles.button}>
    {children}
  </button>
);

export default Button;
