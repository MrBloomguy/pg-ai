import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Menu } from 'lucide-react';
import ThemeToggle from '../theme/ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg lg:hidden"
        >
          <Menu className="w-5 h-5 dark:text-gray-400" />
        </button>
        <span className="text-xl font-serif dark:text-white">pgAI</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex text-sm bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1 items-center gap-2 dark:text-gray-300">
          PGAI
          <button className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium">
            $0.019
          </button>
        </div>
        <ThemeToggle />
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
