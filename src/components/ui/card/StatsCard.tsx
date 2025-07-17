import React from 'react';
import Card from './Card';
import styles from './StatsCard.module.css';

type Props = {
  label: string;
  value: number;
};

export default function StatsCard({ label, value }: Props) {
  return (
    <Card title="Stats" className={styles.statsCard}>
      <p>{label}: <strong>{value}</strong></p>
    </Card>
  );
}
