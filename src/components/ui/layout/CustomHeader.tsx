// src/components/layout/CustomHeader.tsx
import React from 'react';
import { useTheme } from '../../../theme/themeContext';

export default function CustomHeader() {
  const { primary } = useTheme();
  return (
    <header style={{ padding: 16 }}>
      <h2 style={{ color: primary }}>👋 Welcome to SeemAI!</h2>
    </header>
  );
}
