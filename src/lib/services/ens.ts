import { publicClient } from '../config/wallet';

export const getEnsName = async (address: string): Promise<string | null> => {
  try {
    const ensName = await publicClient.getEnsName({ address: address as `0x${string}` });
    return ensName;
  } catch (error) {
    console.warn('ENS resolution failed:', error);
    return null;
  }
};

export const getEnsAvatar = async (address: string): Promise<string | null> => {
  try {
    const ensAvatar = await publicClient.getEnsAvatar({ address: address as `0x${string}` });
    return ensAvatar;
  } catch (error) {
    console.warn('ENS avatar resolution failed:', error);
    return null;
  }
};