import React from 'react';
import { useTheme } from '../../../theme/themeContext';

export default function Footer() {
  const { primary } = useTheme();
  return (
    <footer
      style={{
        padding: 16,
        textAlign: 'center',
        borderTop: '1px solid #ccc',
        color: primary,
      }}
    >
      © 2025 My Company
    </footer>
  );
}
