import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Router from './components/Router';
import WalletProvider from './providers/WalletProvider';
import ThemeProvider from './providers/ThemeProvider';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <WalletProvider>
      <ThemeProvider>
        <div className="flex flex-col h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar 
              isOpen={isSidebarOpen} 
              onClose={() => setIsSidebarOpen(false)} 
            />
            <Router />
          </div>
        </div>
      </ThemeProvider>
    </WalletProvider>
  );
};

export default App;