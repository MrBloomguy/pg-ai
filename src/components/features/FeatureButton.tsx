import React from 'react';

interface FeatureButtonProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-200 bg-white hover:border-violet-200 hover:bg-violet-50 transition-colors w-full"
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-100 text-violet-600">
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-700">{label}</span>
    </button>
  );
};

export default FeatureButton;