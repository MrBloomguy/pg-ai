import { useCallback } from 'react';
import { useAccount } from 'wagmi';
import { useChatStore } from '../store/chatStore';
import { generateResponse } from '../services/chat';

export const useChat = () => {
  const { address } = useAccount();
  const { messages, addMessage, updateMessage, isGenerating, setIsGenerating } = useChatStore();

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || !address || isGenerating) return;

    // Add user message
    addMessage(content, address, 'user');

    // Add pending assistant message
    const assistantMessageId = Math.random().toString(36).substring(7);
    addMessage('Thinking...', 'assistant', 'assistant');

    setIsGenerating(true);

    try {
      const response = await generateResponse(content);
      updateMessage(assistantMessageId, { 
        content: response,
        pending: false
      });
    } catch (error) {
      console.error('Error in chat:', error);
      updateMessage(assistantMessageId, { 
        content: 'Sorry, I encountered an error. Please try again.',
        pending: false
      });
    } finally {
      setIsGenerating(false);
    }
  }, [address, addMessage, updateMessage, setIsGenerating, isGenerating]);

  return {
    messages,
    sendMessage,
    isGenerating,
    canSend: !!address && !isGenerating
  };
};