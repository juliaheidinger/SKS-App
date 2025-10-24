
import { GoogleGenAI } from "@google/genai";
import type { Question } from '../types';

// FIX: Per coding guidelines, initialize GoogleGenAI with process.env.API_KEY directly
// and assume it is always available. Removed unnecessary checks and variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getExplanationFromGemini = async (question: Question): Promise<string> => {
  const model = 'gemini-2.5-flash';
  const correctAnswerText = question.options[question.correctAnswerIndex];

  const prompt = `
    Du bist ein erfahrener Segellehrer. Erkläre das folgende Konzept für einen Segelschüler, der für die deutsche SKS-Prüfung lernt.
    Halte die Erklärung präzise, leicht verständlich und auf den Punkt gebracht. Gib die Antwort auf Deutsch.

    Frage: "${question.question}"
    Korrekte Antwort: "${correctAnswerText}"

    Erkläre kurz, warum diese Antwort richtig ist und was die Kernaussage dahinter ist.
  `;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching explanation from Gemini:", error);
    return "Entschuldigung, es gab ein Problem beim Abrufen der Erklärung. Bitte versuchen Sie es später erneut.";
  }
};
