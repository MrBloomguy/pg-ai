import React from 'react';
import { Plus } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  iconBgColor?: string;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  onClick,
  iconBgColor = 'bg-violet-100 dark:bg-violet-900',
  iconColor = 'text-violet-600 dark:text-violet-400'
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-900/50 transition-colors bg-white dark:bg-gray-800"
    >
      <div className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
      <span className="flex-1 text-left font-medium text-gray-700 dark:text-gray-200">{title}</span>
      <Plus className="w-5 h-5 text-gray-400 dark:text-gray-500" />
    </button>
  );
};

export default FeatureCard;