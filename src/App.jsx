import React from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Potato Disease Identifier</h1>
        <ImageUpload />
      </header>
    </div>
  );
}

export default App;
