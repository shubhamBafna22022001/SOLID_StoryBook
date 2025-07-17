import React from 'react';

export type TextAreaProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

export default function TextArea({ label, value, onChange, placeholder }: TextAreaProps) {
  return (
    <label style={{ display: 'block', marginBottom: 8 }}>
      <span>{label}</span>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ display: 'block', width: '100%', padding: 4 }}
      />
    </label>
  );
}
