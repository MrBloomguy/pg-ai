import { useState, useEffect } from 'react';
import { getEnsName, getEnsAvatar } from '../services/ens';

export const useEns = (address: string | undefined) => {
  const [ensName, setEnsName] = useState<string | null>(null);
  const [ensAvatar, setEnsAvatar] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEnsData = async () => {
      if (!address) {
        setEnsName(null);
        setEnsAvatar(null);
        return;
      }

      setIsLoading(true);
      try {
        const [name, avatar] = await Promise.all([
          getEnsName(address),
          getEnsAvatar(address)
        ]);
        setEnsName(name);
        setEnsAvatar(avatar);
      } catch (error) {
        console.error('Error fetching ENS data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEnsData();
  }, [address]);

  return { ensName, ensAvatar, isLoading };
};