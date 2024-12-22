import { featurePrompts } from '../config/prompts';
import { generateResponse } from './chat';

export const handleFeaturePrompt = async (featureId: string): Promise<string> => {
  const prompt = featurePrompts[featureId as keyof typeof featurePrompts];
  if (!prompt) {
    throw new Error('Invalid feature ID');
  }
  return generateResponse(prompt);
};