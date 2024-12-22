import { openai } from '../config/openai';

export const generateResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error: any) {
    console.error('Error generating response:', error);
    
    if (error?.error?.code === 'insufficient_quota') {
      return 'Sorry, the AI service is currently unavailable. Please try again later.';
    }
    
    return 'An error occurred while generating the response. Please try again.';
  }
};