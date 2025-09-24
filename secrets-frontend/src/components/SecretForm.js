import React, { useState } from 'react';
import axios from 'axios';

function SecretForm() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/secrets/', { name, value });
      // Optionally clear the form after successful submission
      setName('');
      setValue('');
    } catch (error) {
      console.error('Error creating secret:', error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="value">Value:</label>
        <input type="text" id="value" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <button type="submit">Create Secret</button>
    </form>
  );
}

export default SecretForm;

