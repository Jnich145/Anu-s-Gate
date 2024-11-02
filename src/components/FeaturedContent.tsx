import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface ContentItem {
  type: 'podcast' | 'video' | 'article';
  title: string;
  description: string;
  image: string;
}

const featuredContent: ContentItem[] = [
  {
    type: 'podcast',
    title: 'Ancient Astronaut Theory Revisited',
    description: 'New evidence supporting ancient alien contact',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
  },
  {
    type: 'video',
    title: 'Frequency Healing Explained',
    description: 'Understanding the science of vibrational therapy',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80'
  },
  {
    type: 'article',
    title: 'Decoding Sumerian Tablets',
    description: 'Latest translations reveal astronomical knowledge',
    image: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80'
  }
];

const FeaturedContent = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Knowledge</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                <p className="text-gray-400">{content.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;