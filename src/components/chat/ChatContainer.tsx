import React from 'react';
import { FileText, Image, Gift, Users } from 'lucide-react';
import ChatInput from './ChatInput';
import ChatHistory from './ChatHistory';
import FeatureCard from '../features/FeatureCard';
import { useFeatures } from '../../lib/hooks/useFeatures';

const ChatContainer = () => {
  const { handleFeatureClick } = useFeatures();

  return (
    <div className="flex-1 flex flex-col h-screen bg-white dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
            Welcome to Public Goods AI
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">
            Explore Public Goods with me!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-12">
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Public Goods"
              onClick={() => handleFeatureClick('public-goods')}
            />
            <FeatureCard
              icon={<Gift className="w-6 h-6" />}
              title="Fund Project"
              onClick={() => handleFeatureClick('fund-project')}
              iconBgColor="bg-pink-100 dark:bg-pink-900"
              iconColor="text-pink-600 dark:text-pink-400"
            />
            <FeatureCard
              icon={<Image className="w-6 h-6" />}
              title="Get Grant"
              onClick={() => handleFeatureClick('get-grant')}
              iconBgColor="bg-blue-100 dark:bg-blue-900"
              iconColor="text-blue-600 dark:text-blue-400"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="QF"
              onClick={() => handleFeatureClick('qf')}
              iconBgColor="bg-green-100 dark:bg-green-900"
              iconColor="text-green-600 dark:text-green-400"
            />
          </div>
          <ChatHistory />
          <ChatInput />
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <div className="max-w-3xl mx-auto"></div>
      </div>
    </div>
  );
};

export default ChatContainer;
