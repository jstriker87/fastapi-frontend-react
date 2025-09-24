import React from 'react';
import SecretList from './components/SecretList';
import SecretForm from './components/SecretForm';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <div className="App">
      <h1>Secrets Management</h1>
      <SecretForm />
      <SecretList />
    </div>
  );
}

export default App;
