
import React from 'react';
import Navbar from '@/components/Navbar';
import StatCard from '@/components/StatCard';
import AgentTable from '@/components/AgentTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Value Locked"
            value="$1.23B"
            change={{ value: "+5.23%", positive: true }}
          />
          <StatCard
            title="Total Market Cap"
            value="$892M"
            change={{ value: "+2.8%", positive: true }}
          />
          <StatCard
            title="Active Agents"
            value="1,432"
            change={{ value: "+12 today", positive: true }}
          />
        </div>

        <AgentTable />
      </main>
    </div>
  );
};

export default Index;
