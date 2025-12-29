require("dotenv").config()
const { GoogleGenAI } = require("@google/genai") ;

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY,
});


async function generateCaption(base64ImageFile){

const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
   config: {
      // systemInstruction:  `
      //       You are an expert in generating captions for images.
      //       You generate single caption for the image.
      //       Your caption should be short and concise.
      //       You use hashtags and emojis in the caption.
      //       `
      systemInstruction:  `
            You are an expert in generating hashtag  for images.
            You generate 10 hashtag for the image.
            Your hashtag should be short and concise.
            no numbering and any other text only hashtag
           
            `
    },
});


  return response.text

}




module.exports = generateCaption