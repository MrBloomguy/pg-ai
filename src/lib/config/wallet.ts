import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const chains = [mainnet, polygon, optimism, arbitrum];

export const { chains: configuredChains, publicClient } = configureChains(
  chains,
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Akira-AQ',
  projectId: '37b5e2fccd46c838885f41186745251e',
  chains: configuredChains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { configuredChains as chains };