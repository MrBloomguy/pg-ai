import React, { useState } from 'react';
import { Paperclip, Mic, Send } from 'lucide-react';
import { useChat } from '../../lib/hooks/useChat';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, canSend, isGenerating } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !canSend) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="ask me about Public Goods..."
        className="w-full pl-4 pr-32 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-violet-300 dark:focus:border-violet-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        disabled={isGenerating}
      />

      <div className="absolute right-3 top-2 flex items-center gap-2">
        <button
          type="button"
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <Paperclip className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </button>
        <button
          type="button"
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <Mic className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </button>
        <button
          type="submit"
          disabled={!canSend || !message.trim()}
          className="ml-2 bg-violet-600 text-white px-4 py-1.5 rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
