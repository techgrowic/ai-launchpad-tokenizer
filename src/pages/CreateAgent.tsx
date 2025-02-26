import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import { useAgents } from '@/contexts/AgentContext';

const CreateAgent = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addAgent } = useAgents();
  const [formData, setFormData] = useState({
    name: '',
    ticker: '',
    description: '',
    type: '',
    profilePicture: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.ticker || !formData.description || !formData.type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create new agent
    const symbol = formData.ticker.startsWith('$') ? formData.ticker : `$${formData.ticker}`;
    
    // If there's a profile picture, create a URL for it
    let profilePictureUrl = undefined;
    if (formData.profilePicture) {
      profilePictureUrl = URL.createObjectURL(formData.profilePicture);
    }

    // Add the new agent
    addAgent({
      name: formData.name,
      symbol: symbol,
      description: formData.description,
      type: formData.type,
      profilePicture: profilePictureUrl
    });

    // Show success message
    toast({
      title: "Success",
      description: "AI Agent created successfully!",
    });

    // Navigate back to the home page
    navigate('/');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        profilePicture: e.target.files![0]
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Back to Agents
          </Link>
        </div>

        <div className="glass-card p-8">
          <h1 className="text-2xl font-semibold mb-6">Create New AI Agent</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="profilePicture" className="text-base">
                Profile Picture <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                  {formData.profilePicture ? (
                    <img
                      src={URL.createObjectURL(formData.profilePicture)}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <Upload className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="file"
                    id="profilePicture"
                    className="hidden"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    onChange={handleFileChange}
                  />
                  <Label
                    htmlFor="profilePicture"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                  >
                    Upload Image
                  </Label>
                  <p className="text-sm text-gray-500 mt-2">
                    JPG, PNG, WEBP and GIF files supported. Maximum file size is 5MB.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">
                AI Agent Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter agent name"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ticker" className="text-base">
                Ticker <span className="text-red-500">*</span>
              </Label>
              <Input
                id="ticker"
                placeholder="$"
                value={formData.ticker}
                onChange={e => setFormData(prev => ({ ...prev, ticker: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base">
                Why This Agent Is Bullish <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Tell us why you think this agent deserves support from the community."
                className="min-h-[150px]"
                value={formData.description}
                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="text-base">
                Agent Type <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select agent type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="defi">DeFi</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="ai">AI & ML</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Create Agent
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateAgent;
