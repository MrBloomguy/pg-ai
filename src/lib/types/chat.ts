export interface Message {
  id: string;
  content: string;
  timestamp: number;
  sender: string;
  role: 'user' | 'assistant';
  pending?: boolean;
}

export interface ChatState {
  messages: Message[];
  isGenerating: boolean;
  addMessage: (content: string, sender: string, role: 'user' | 'assistant') => void;
  updateMessage: (id: string, updates: Partial<Message>) => void;
  setIsGenerating: (isGenerating: boolean) => void;
}