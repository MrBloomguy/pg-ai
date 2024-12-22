import { create } from 'zustand';

interface RouteState {
  currentRoute: string;
  setRoute: (route: string) => void;
}

export const useRouteStore = create<RouteState>((set) => ({
  currentRoute: 'chat',
  setRoute: (route) => set({ currentRoute: route }),
}));