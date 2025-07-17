// src/components/ui/card/Card.tsx
import React from 'react';

export type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;     // ← add this
};

export default function Card({
  title,
  children,
  className = '',         // ← default
}: CardProps) {
  return (
    <div className={`card-container ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}
