import axios from "axios";

// const features = [
//   'Caption',
//   'DenseCaptions',
//   'Objects',
//   'People',
//   'Read',
//   'SmartCrops',
//   'Tags'
// ];

async function analyzeImage(imageUrl) {
  const key = "110adda1515b49e68db5fb35b8ce48d3";
  const endpoint = "https://kshitij.cognitiveservices.azure.com/";
  const url = `${endpoint}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview`;

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
          features: "caption,read",
          "model-version": "latest",
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

// Example usage
// const imageUrl = 'https://learn.microsoft.com/azure/ai-services/computer-vision/media/quickstarts/presentation.png';
// analyzeImage(imageUrl).then(data => {
//   console.log(data);
// });
export default analyzeImage
