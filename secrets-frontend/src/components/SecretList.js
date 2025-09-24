import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SecretList() {
  const [secrets, setSecrets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSecrets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/secrets/'); // Replace with your API URL
        setSecrets(response.data);
      } catch (error) {
        setError(error.message || 'Failed to fetch secrets');
      } finally {
        setLoading(false);
      }
    };

    fetchSecrets();
  }, []); // Empty dependency array means this effect runs only once on mount

  if (loading) {
    return <p>Loading secrets...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {secrets.map((secret) => (
        <li key={secret.sha256_hash}>
          SHA256 Hash: {secret.sha256_hash}
        </li>
      ))}
    </ul>
  );
}

export default SecretList;

