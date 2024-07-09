import React,{useState} from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  const handleAnalyze = () => {
    // Add your image analysis logic here
    alert('Analyzing image from URL: ' + url);
  };

  const handleGenerate = () => {
    // Add your image generation logic here
    alert('Generating image with prompt: ' + url);
  };

  return (
    <div className="App">
        <h1>Image Analyzer and Generator</h1>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter image URL or prompt"
        />
        <div>
          <button onClick={handleAnalyze}>Analyze</button>
          <button onClick={handleGenerate}>Generate</button>
        </div>
    </div>
  );
}

export default App;
