
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useAgents } from '@/contexts/AgentContext';

export default function AgentTable() {
  const navigate = useNavigate();
  const { agents } = useAgents();

  const handleRowClick = (symbol: string) => {
    const cleanSymbol = symbol.replace('$', '');
    navigate(`/agent/${cleanSymbol}`);
  };

  return (
    <div className="glass-card p-6 animate-slideUp">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Top AI Agents</h2>
        <select className="border border-gray-200 rounded-md px-3 py-1.5">
          <option>All Categories</option>
          <option>Gaming</option>
          <option>Data</option>
          <option>Finance</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="table-header w-64">AI Agents <ChevronUp className="inline h-4 w-4 ml-1" /></th>
              <th className="table-header">Market Cap <ChevronDown className="inline h-4 w-4 ml-1" /></th>
              <th className="table-header">24h Chg <ChevronUp className="inline h-4 w-4 ml-1" /></th>
              <th className="table-header">Holders <ChevronUp className="inline h-4 w-4 ml-1" /></th>
              <th className="table-header">24h Vol <ChevronDown className="inline h-4 w-4 ml-1" /></th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr 
                key={agent.symbol} 
                className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(agent.symbol)}
              >
                <td className="table-cell">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full">
                      {agent.profilePicture && (
                        <img 
                          src={agent.profilePicture} 
                          alt={agent.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{agent.name}</div>
                      <div className="text-sm text-gray-500">{agent.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="table-cell font-medium">{agent.marketCap}</td>
                <td className={`table-cell ${Number(agent.change24h) >= 0 ? 'text-success' : 'text-danger'}`}>
                  {Number(agent.change24h) >= 0 ? '+' : ''}{agent.change24h}
                </td>
                <td className="table-cell">{agent.holders.toLocaleString()}</td>
                <td className="table-cell">{agent.volume24h}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
