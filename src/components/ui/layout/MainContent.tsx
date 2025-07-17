import React from 'react';

export default function MainContent({ children }: { children: React.ReactNode }) {
  return <main style={{ flex: 1, padding: 16 }}>{children}</main>;
}
