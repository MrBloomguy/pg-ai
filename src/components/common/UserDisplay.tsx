import React from 'react';
import { useEns } from '../../lib/hooks/useEns';
import { truncateAddress } from '../../lib/utils/address';
import Avatar from './Avatar';

interface UserDisplayProps {
  address: string;
  size?: 'sm' | 'md' | 'lg';
}

const UserDisplay: React.FC<UserDisplayProps> = ({ address, size = 'md' }) => {
  const { ensName, ensAvatar, isLoading } = useEns(address);
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar 
        seed={address} 
        customImage={ensAvatar}
        size={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
      />
      <span className={`font-medium text-gray-700 ${sizeClasses[size]}`}>
        {isLoading ? '...' : ensName || truncateAddress(address)}
      </span>
    </div>
  );
};

export default UserDisplay;