import React from 'react';

export type TextInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function TextInput({ label, value, onChange, placeholder }: TextInputProps) {
  return (
    <label style={{ display: 'block', marginBottom: 8 }}>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ display: 'block', width: '100%', padding: 4 }}
      />
    </label>
  );
}
