import React from 'react';
import { Search, Layout, FileText, Users, History, Settings, HelpCircle, X } from 'lucide-react';
import NavItem from './NavItem';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900 flex items-center justify-center">
                <Layout className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">pgAI</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg lg:hidden"
            >
              <X className="w-5 h-5 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        <nav className="flex-1">
          <NavItem icon={<Layout />} label="AI Chat" active />
          <NavItem icon={<FileText />} label="Projects" />
          <NavItem icon={<Layout />} label="Templates" />
          <NavItem icon={<FileText />} label="Documents" />
          <NavItem icon={<Users />} label="Community" badge="NEW" />
          <NavItem icon={<History />} label="History" />
        </nav>

        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Settings & Help</h3>
          <NavItem icon={<Settings />} label="Settings" compact />
          <NavItem icon={<HelpCircle />} label="Help" compact />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;