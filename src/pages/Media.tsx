import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Headphones, BookOpen, Search } from 'lucide-react';

type ContentType = 'podcasts' | 'videos' | 'articles';

const MediaContent = {
  podcasts: [
    {
      title: "The Anunnaki Chronicles: Episode 1",
      description: "Exploring the origins of the Anunnaki and their influence on Earth",
      duration: "1:15:30",
      date: "March 1, 2024",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80"
    },
    {
      title: "Frequency Science Deep Dive",
      description: "Understanding the fundamental principles of frequency science",
      duration: "45:20",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: "Lost Technologies of Antiquity",
      description: "Uncovering evidence of advanced ancient technologies",
      duration: "55:45",
      date: "March 8, 2024",
      image: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?auto=format&fit=crop&q=80"
    }
  ],
  videos: [
    {
      title: "Ancient Sites Revealed",
      description: "Virtual tour of mysterious archaeological sites",
      duration: "25:15",
      date: "March 3, 2024",
      image: "https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?auto=format&fit=crop&q=80"
    },
    {
      title: "Decoding Sacred Geometry",
      description: "Visual exploration of ancient mathematical principles",
      duration: "18:30",
      date: "March 6, 2024",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
    },
    {
      title: "Energy Patterns Visualization",
      description: "Understanding frequency patterns in nature",
      duration: "22:45",
      date: "March 9, 2024",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80"
    }
  ],
  articles: [
    {
      title: "The Sumerian Connection",
      description: "New discoveries linking Sumerian texts to astronomical knowledge",
      readTime: "8 min read",
      date: "March 2, 2024",
      image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80"
    },
    {
      title: "Quantum Frequencies",
      description: "The intersection of ancient wisdom and quantum physics",
      readTime: "12 min read",
      date: "March 4, 2024",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
    },
    {
      title: "Hidden Symbols Decoded",
      description: "Understanding the universal language of sacred symbols",
      readTime: "10 min read",
      date: "March 7, 2024",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
    }
  ]
};

const Media = () => {
  const [activeTab, setActiveTab] = useState<ContentType>('podcasts');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (type: ContentType) => {
    switch (type) {
      case 'podcasts':
        return <Headphones className="h-5 w-5" />;
      case 'videos':
        return <Play className="h-5 w-5" />;
      case 'articles':
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Gateways of Knowledge
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of podcasts, videos, and articles uncovering ancient wisdom and hidden knowledge.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2">
            {(['podcasts', 'videos', 'articles'] as ContentType[]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                {getIcon(type)}
                <span className="capitalize">{type}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-slate-800 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MediaContent[activeTab].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent">
                  <button className="absolute bottom-4 right-4 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
                    {getIcon(activeTab)}
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{item.date}</span>
                <span>{('duration' in item ? item.duration : item.readTime)}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Media;