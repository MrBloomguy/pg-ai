import React from 'react';
import { useRouteStore } from '../lib/store/routeStore';
import ChatContainer from './chat/ChatContainer';
import ProjectsPage from './pages/ProjectsPage';
import TemplatesPage from './pages/TemplatesPage';
import DocumentsPage from './pages/DocumentsPage';
import CommunityPage from './pages/CommunityPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';

const Router = () => {
  const { currentRoute } = useRouteStore();

  const routes = {
    chat: <ChatContainer />,
    projects: <ProjectsPage />,
    templates: <TemplatesPage />,
    documents: <DocumentsPage />,
    community: <CommunityPage />,
    history: <HistoryPage />,
    settings: <SettingsPage />,
    help: <HelpPage />
  };

  return routes[currentRoute as keyof typeof routes] || routes.chat;
};

export default Router;