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

export default generateImage