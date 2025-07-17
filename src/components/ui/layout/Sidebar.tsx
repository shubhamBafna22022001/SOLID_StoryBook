import React from 'react';
import { useTheme } from '../../../theme/themeContext';

export default function Sidebar() {
  const { primary } = useTheme();
  return (
    <aside style={{ width: 200, background: '#eee', padding: 16 }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ color: primary }}>Home</li>
          <li style={{ color: primary }}>Profile</li>
        </ul>
      </nav>
    </aside>
  );
}
