import React from 'react';
import { generateRandomSeed, getDicebearUrl } from '../../lib/utils/avatar';

interface AvatarProps {
  seed?: string;
  size?: number;
  className?: string;
  customImage?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ 
  seed = generateRandomSeed(),
  size = 32,
  className = '',
  customImage = null
}) => {
  const imageUrl = customImage || getDicebearUrl(seed);

  return (
    <img
      src={imageUrl}
      alt="Avatar"
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    />
  );
};

export default Avatar;