import { Gem, Coins, Gift, Users } from 'lucide-react';
import React from 'react';

export const features = [
  { 
    id: 'public-goods', 
    icon: <Gem className="w-4 h-4" />, 
    label: 'Public Goods' 
  },
  { 
    id: 'fund-project', 
    icon: <Coins className="w-4 h-4" />, 
    label: 'Fund a Project' 
  },
  { 
    id: 'get-grant', 
    icon: <Gift className="w-4 h-4" />, 
    label: 'Get a Grant' 
  },
  { 
    id: 'qf', 
    icon: <Users className="w-4 h-4" />, 
    label: 'QF' 
  },
];