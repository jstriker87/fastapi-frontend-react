import React, { useState } from 'react';
import axios from 'axios';

function CheckToken() {
  const [token, setToken] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let resp = await axios.post('http://localhost:8000/auth/', { token });
      setToken('');
      setResponse("True")
    } catch (error) {
      if (error.status == "401") 
      {
        setResponse("False")
      }else{
          setResponse(err.message)
      }
    }
  };

  return (
    <>
    <h2>Check Token</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="token">Token:</label>
        <input type="text" id="token" value={token} onChange={(e) => setToken(e.target.value)} />
      </div>
      < br/>
      <button type="submit">Check Token</button>
      <br />
      <span>  Valid Token?: {response}</span>
    </form>
    </>
  );
}

export default CheckToken;

