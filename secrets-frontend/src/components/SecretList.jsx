import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SecretList() {
  const [secrets, setSecrets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [encoding, setEncoding] = useState("sha256");

    const fetchSecrets = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/secrets?encoding_method=${encoding}`)
            setSecrets(response.data);
        } catch (error) {
            console.error('Error getting secret:', error);
            setError(error.message || 'Failed to fetch secrets');
        } finally {
            setLoading(false);
        }
    };
  useEffect(() => {
    fetchSecrets();
  }, []); 


  useEffect(() => {
    fetchSecrets();
  }, [encoding]); 


  if (loading) {
    return <p>Loading secrets...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
        <select id="status" name="status" defaultValue="sha256" onChange={e => setEncoding(e.target.value)} >
            <option value="sha256">sha256</option>
            <option value="blake2b">blake2b</option>
            <option value="blake2s">blake2s</option>
            <option value="md5">md5</option>
        </select>
    <ul>
      {secrets.map((secret) => (
        <li key={secret.name}
        style={{ listStyleType: "none", padding: 0, margin: 0 }}
        >
          {secret.name}:{secret.value}
        </li>
      ))}
    </ul>
    </>
  );
}

export default SecretList;

