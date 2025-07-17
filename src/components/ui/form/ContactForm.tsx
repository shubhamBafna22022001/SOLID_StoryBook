// src/components/ui/form/ContactForm.tsx
import React, { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Checkbox from './Checkbox';
import Button from '../Button/Button'; // ✅ Use your reusable button

export default function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert('Please fill out all fields.');
      return;
    }
    alert(`Submitted:\nName: ${name}\nMessage: ${message}\nSubscribe: ${subscribe}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <TextInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <TextArea
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
      />
      <Checkbox
        label="Subscribe to newsletter"
        checked={subscribe}
        onChange={(e) => setSubscribe(e.target.checked)}
      />
      <Button>Submit</Button> {/* ✅ Reused Button */}
    </form>
  );
}
