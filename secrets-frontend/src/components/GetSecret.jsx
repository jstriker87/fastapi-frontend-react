import React, { useState } from 'react';
import axios from 'axios';

function GetASecret() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [encoding, setEncoding] = useState("sha256");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.get(`http://localhost:8000/secrets/${name}`, {
        params: { encoding_method: encoding }
      });
      setName('');
      setEncoding("sha256")
      console.log(resp.data)
      setResponse(resp.data.hash)
    } catch (error) {
      setResponse(error.message)
      console.error('Error creating secret:', error);
    }
  };

  return (
    <>
    <h2> Get A Secret</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
        <select id="status" name="status" defaultValue="sha256" onChange={e => setEncoding(e.target.value)} >
            <option value="sha256">sha256</option>
            <option value="blake2b">blake2b</option>
            <option value="blake2s">blake2s</option>
            <option value="md5">md5</option>
      </select>
      < br/>
      <button type="submit">Get Secret</button>
      <br />
      Hash: <p>{response}</p>
    </form>
    </>
  );
}

export default GetASecret;

