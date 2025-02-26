
import React from 'react';
import { Search, Plus, Wallet } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-semibold">AI Agent Launchpad</h1>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="nav-link">Agents</a>
              <a href="#" className="nav-link">Marketplace</a>
              <a href="#" className="nav-link">Documentation</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search agents..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>

            <Button className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90">
              <Plus className="h-4 w-4" />
              Create New Agent
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
