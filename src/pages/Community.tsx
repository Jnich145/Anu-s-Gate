import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Award, Search } from 'lucide-react';

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const discussions = [
    {
      title: "Ancient Astronaut Evidence",
      author: "CosmicSeeker",
      replies: 42,
      views: 1337,
      lastActive: "2 hours ago",
      tags: ["Anunnaki", "Evidence", "Research"]
    },
    {
      title: "Frequency Healing Techniques",
      author: "VibrationalHealer",
      replies: 28,
      views: 892,
      lastActive: "5 hours ago",
      tags: ["Frequency", "Healing", "Practice"]
    },
    {
      title: "Decoding Sumerian Tablets",
      author: "AncientScribe",
      replies: 56,
      views: 2103,
      lastActive: "1 hour ago",
      tags: ["Sumerian", "Translation", "History"]
    }
  ];

  const topContributors = [
    {
      name: "CosmicSeeker",
      contributions: 156,
      badge: "Elder Sage",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
    },
    {
      name: "VibrationalHealer",
      contributions: 132,
      badge: "Knowledge Keeper",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "AncientScribe",
      contributions: 98,
      badge: "Wisdom Seeker",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            The Gathering
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our community of seekers and share your knowledge about ancient wisdom and cosmic mysteries.
          </p>
        </div>

        {/* Search and New Discussion */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-slate-800 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="w-full sm:w-auto btn-primary">
            <MessageSquare className="inline-block mr-2 h-5 w-5" />
            Start New Discussion
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Discussions */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            {discussions.map((discussion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:border-purple-500/50"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold hover:text-purple-400 cursor-pointer">
                      {discussion.title}
                    </h3>
                    <p className="text-gray-400">Started by {discussion.author}</p>
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-sm bg-slate-700 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <p>{discussion.replies} replies</p>
                    <p>{discussion.views} views</p>
                    <p>Last active {discussion.lastActive}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Top Contributors */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Top Contributors</h2>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{contributor.name}</p>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 text-purple-400 mr-1" />
                        <span className="text-gray-400">{contributor.badge}</span>
                      </div>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">
                      {contributor.contributions} posts
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Community Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-400" />
                    <span>Members</span>
                  </div>
                  <span className="text-gray-400">1,337</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                    <span>Discussions</span>
                  </div>
                  <span className="text-gray-400">2,456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Community;