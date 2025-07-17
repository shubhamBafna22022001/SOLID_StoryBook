import React from 'react';

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label style={{ display: 'block', marginBottom: 8 }}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span style={{ marginLeft: 4 }}>{label}</span>
    </label>
  );
}
