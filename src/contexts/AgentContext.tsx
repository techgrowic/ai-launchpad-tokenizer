
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export interface Agent {
  name: string;
  symbol: string;
  marketCap: string;
  change24h: string;
  holders: number;
  volume24h: string;
  profilePicture?: string;
  description?: string;
  type?: string;
}

interface AgentContextType {
  agents: Agent[];
  addAgent: (agent: Omit<Agent, 'marketCap' | 'change24h' | 'holders' | 'volume24h'>) => void;
}

const AgentContext = createContext<AgentContextType | undefined>(undefined);

export function AgentProvider({ children }: { children: React.ReactNode }) {
  const [agents, setAgents] = useState<Agent[]>([
    {
      name: 'G.A.M.E',
      symbol: '$GAME',
      marketCap: '$33.89m',
      change24h: '2.01%',
      holders: 266647,
      volume24h: '$471.61k',
    },
    {
      name: 'DataSense',
      symbol: '$DATA',
      marketCap: '$28.45m',
      change24h: '-1.25%',
      holders: 154320,
      volume24h: '$892.15k',
    },
    {
      name: 'Luna',
      symbol: '$LUNA',
      marketCap: '$15.39m',
      change24h: '0.63%',
      holders: 292200,
      volume24h: '$379.96k',
    },
  ]);

  const addAgent = (newAgent: Omit<Agent, 'marketCap' | 'change24h' | 'holders' | 'volume24h'>) => {
    const fullAgent: Agent = {
      ...newAgent,
      marketCap: '$0',
      change24h: '0%',
      holders: 0,
      volume24h: '$0',
    };
    setAgents(prev => [fullAgent, ...prev]);
  };

  return (
    <AgentContext.Provider value={{ agents, addAgent }}>
      {children}
    </AgentContext.Provider>
  );
}

export const useAgents = () => {
  const context = useContext(AgentContext);
  if (context === undefined) {
    throw new Error('useAgents must be used within an AgentProvider');
  }
  return context;
};
