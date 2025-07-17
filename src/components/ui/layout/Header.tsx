import React from 'react';
import { useTheme } from '../../../theme/themeContext';

export default function Header() {
  const { primary, background } = useTheme();
  return (
    <header style={{ background, padding: 16 }}>
      <h1 style={{ color: primary, margin: 0 }}>My App</h1>
    </header>
  );
}
