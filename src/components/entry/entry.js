import "../../App.css";
import React, { useState } from "react";
import axios from "axios";
import generateImage from "../utils/test.mjs"; 

async function analyzeImage(imageUrl) {
  const key = " "; //Key
  const endpoint = " "; //Endpoint
  const url = `${endpoint}/vision/v3.2/analyze?api-version=2021-05-01-preview`;

  try {
    const response = await axios.post(
      url,
      { url: imageUrl },
      {
        headers: {
          "Ocp-Apim-Subscription-Key": key,
          "Content-Type": "application/json",
        },
        params: {
          visualFeatures: "Categories,Description,Color",
          details: "",
          language: "en",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
}

const Entry = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleImageAnalysis = async () => {
    try {
      const data = await analyzeImage(imageUrl);
      setResult(data); 
    } catch (error) {
      console.error("Error analyzing image:", error);
    }
  };

const handleGenerate = async () => {
    const apiKey = ' '; // Replace with your actual OpenAI API key
    try {
      const generatedUrl = await generateImage(imageUrl, apiKey);
      setGeneratedImageUrl(generatedUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };



  return (
    <div className="App">
    <div className="test">
      <h1>Welcome to PixelPilot, your AI Image Analyzer and Generator Tool.</h1>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL or prompt"
      />
      <div className="button-section">
        <button onClick={handleImageAnalysis}>Analyze</button>
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <i className="wait-text">*Kindly wait for a moment for the image to generate*</i>
      </div>

   
            {result && (
              <div className="result">
              <h1>Image Analysis:</h1>
              <img
              src={imageUrl}
              alt="Uploaded"/>
                <pre>{JSON.stringify(result, null, 2)}</pre>
              </div>
            )}

            {generatedImageUrl && (
           <div className="result1">
           <h1>Generated Image:</h1>
           <img src={generatedImageUrl} alt="Generated" />
        </div>
      )}
          </div>
  );
};

export default Entry;
