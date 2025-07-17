import React from 'react';
import Card from './Card';
import styles from './ProfileCard.module.css';

type Props = {
  name: string;
  role: string;
};

export default function ProfileCard({ name, role }: Props) {
  return (
    <Card title="Profile Info" className={styles.profileCard}>
      <p><strong>{name}</strong></p>
      <p>{role}</p>
    </Card>
  );
}
