
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Copy, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AgentDetail = () => {
  const { symbol } = useParams();
  const [showTradeDialog, setShowTradeDialog] = useState(false);
  
  // Mock data - in a real app, fetch this from an API
  const agentData = {
    name: 'AI.XBT',
    symbol: '$AIXBT',
    price: '$0.198915',
    marketCap: '$168.42M',
    liquidity: '$3.47M',
    holders: '310,630',
    volume24h: '$396.41k',
    description: 'AI-powered trading and analytics protocol',
    socialMetrics: {
      mindshare: '6.49%',
      impressions: '13,668,431',
      engagement: '90,368',
      followers: '497,218',
      smartFollowers: '5,542'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Back to Agents
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h1 className="text-2xl font-semibold">{agentData.name}</h1>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">{agentData.symbol}</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Copy className="h-4 w-4" />
                    </button>
                    <a href="#" className="text-gray-400 hover:text-gray-600">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600">
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-[400px] bg-gray-100 rounded-lg mb-6">
                {/* Trading chart would go here */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Trading Chart Placeholder
                </div>
              </div>

              <p className="text-gray-600">{agentData.description}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Influence Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <h3 className="text-sm text-gray-500">Mindshare</h3>
                  <p className="text-lg font-medium">{agentData.socialMetrics.mindshare}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Impressions</h3>
                  <p className="text-lg font-medium">{agentData.socialMetrics.impressions.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Engagement</h3>
                  <p className="text-lg font-medium">{agentData.socialMetrics.engagement.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Followers</h3>
                  <p className="text-lg font-medium">{agentData.socialMetrics.followers.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Smart Followers</h3>
                  <p className="text-lg font-medium">{agentData.socialMetrics.smartFollowers.toLocaleString()}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-500">Price</h3>
                  <p className="text-2xl font-semibold">{agentData.price}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-500">Market Cap</h3>
                    <p className="text-lg font-medium">{agentData.marketCap}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Liquidity</h3>
                    <p className="text-lg font-medium">{agentData.liquidity}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Holders</h3>
                    <p className="text-lg font-medium">{agentData.holders}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">24h Volume</h3>
                    <p className="text-lg font-medium">{agentData.volume24h}</p>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Trade</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Trade {agentData.name}</DialogTitle>
                      <DialogDescription>
                        Powered by OKX DEX
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4" style={{ height: '500px' }}>
                      <div className="text-xs text-gray-500 text-center mt-4">
                        * You are about to use the services of third party operators over which OKX has no control. 
                        OKX is not liable for any loss or other consequences, including the freezing / seizing of your assets.
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentDetail;
