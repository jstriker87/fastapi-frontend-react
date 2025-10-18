import React, { useState } from 'react';
import axios from 'axios';

function CreateSecret() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let resp = await axios.post('http://localhost:8000/secrets/', { name, value });
      // Optionally clear the form after successful submission
      setName('');
      setValue('');
      console.log(resp.data)
      setResponse(resp.data.message)
    } catch (error) {
      setResponse(error.message)
      console.error('Error creating secret:', error);
    }
  };

  return (
    <>
    <h2> Create Secret</h2>
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
      <p>{response}</p>
    </form>
    </>
  );
}

export default CreateSecret;

