
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO } from "../constants";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askAlperenAssistant = async (query: string) => {
  const ai = getAI();
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are an AI assistant for Alperen's professional portfolio.
    Information about Alperen:
    - Name: Alperen
    - Role: ${PERSONAL_INFO.level}
    - Company: ${PERSONAL_INFO.company} (${PERSONAL_INFO.companyUrl})
    - Personality: Professional, technical, confident, but friendly.
    - Skills: Fullstack Development, Lead Engineering in Defense Systems.
    
    Answer user queries as if you are Alperen's digital agent. Keep it concise and professional.
    If asked about things not in this profile, politely state you represent Alperen's professional portfolio.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text || "I'm having a bit of trouble connecting right now. Please try again!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently offline. Feel free to contact me directly!";
  }
};
