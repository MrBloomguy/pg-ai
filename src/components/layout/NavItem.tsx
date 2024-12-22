import React from 'react';
import { useRouteStore } from '../../lib/store/routeStore';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  route?: string;
  active?: boolean;
  badge?: string;
  compact?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  label, 
  route = label.toLowerCase(), 
  active, 
  badge, 
  compact 
}) => {
  const { setRoute, currentRoute } = useRouteStore();
  const isActive = active || currentRoute === route;

  return (
    <button
      onClick={() => setRoute(route)}
      className={`
        w-full flex items-center gap-3 px-4 
        ${compact ? 'py-2' : 'py-3'} 
        ${isActive 
          ? 'bg-violet-50 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400' 
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
        }
      `}
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="flex-1 text-sm text-left">{label}</span>
      {badge && (
        <span className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
};

export default NavItem;