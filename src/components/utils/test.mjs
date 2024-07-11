import axios from "axios";

const generateImage = async (prompt, apiKey) => {
  const openaiUrl = "https://api.openai.com/v1/images/generations";
  try {
    const response = await axios.post(
      openaiUrl,
      {
        prompt: prompt,
        n: 1,
        size: "512x512"
      },
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.data[0].url;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}; 
// Test the generateImage function
// const testGenerateImage = async () => {
//     const apiKey = 'sk-proj-zGkl9DXRljKxIuRQOFDGT3BlbkFJqY28uAExlPW48dhldsHP'; // Replace with your actual OpenAI API key
//     const prompt = 'A futuristic city skyline at sunset';
    
//     try {
//       const imageUrl = await generateImage(prompt, apiKey);
//       console.log('Generated Image URL:', imageUrl);
//     } catch (error) {
//       console.error('Error in testGenerateImage:', error);
//     }
//   };
  
  // Call the test function
// testGenerateImage();

export default generateImage