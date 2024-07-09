import "../../App.css";
import React, { useState } from "react";

const Entry = () => {
  const [url, setUrl] = useState("");

  const handleAnalyze = () => {
    // Implement analyze functionality here
    console.log("Analyzing image:", url);
    // Example: You can call a function or make an API request for image analysis
  };

  const handleGenerate = () => {
    // Implement generate functionality here
    console.log("Generating image based on:", url);
    // Example: You can call a function or make an API request to generate an image
  };

  return (
    <div className="App">
      <h1> Welcome to PixelPilot, your AI Image Analyzer and Generator</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter image URL or prompt"
      />
      <div className="button-section">
        <button onClick={handleAnalyze}>Analyze</button>
        <button onClick={handleGenerate}>Generate</button>
      </div>
    </div>
  );
};

export default Entry;
