import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="add-background">
          <h2>Add new Background Image!</h2>
        </div>
        <div className="image-section">
          <div className="image-placeholder">
            Image without background
          </div>
        </div>
        <div className="sample-backgrounds">
          <h2>Sample Backgrounds</h2>
          <div className="sample-images">
            <div className="sample-image"></div>
            <div className="sample-image"></div>
            <div className="sample-image"></div>
            <div className="sample-image"></div>
            <div className="sample-image"></div>
          </div>
          <button className="upload-button">Upload your own background</button>
        </div>
      </div>
    </div>
  );
}

export default App;
