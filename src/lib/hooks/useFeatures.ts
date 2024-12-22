import { useCallback } from 'react';
import { useChat } from './useChat';
import { featurePrompts } from '../config/prompts';

export const useFeatures = () => {
  const { sendMessage, canSend } = useChat();

  const handleFeatureClick = useCallback((featureId: string) => {
    if (!canSend) return;
    
    const prompt = featurePrompts[featureId as keyof typeof featurePrompts];
    if (prompt) {
      sendMessage(prompt);
    }
  }, [sendMessage, canSend]);

  return {
    handleFeatureClick
  };
};