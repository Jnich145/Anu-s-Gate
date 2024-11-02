import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Zap, Book, Database, Star, TrendingUp } from 'lucide-react';

const Topics = () => {
  const categories = [
    {
      title: "Anunnaki",
      description: "Ancient astronaut theories and historical evidence",
      icon: <Compass className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?auto=format&fit=crop&q=80"
    },
    {
      title: "Frequency Science",
      description: "Understanding vibrational energy and consciousness",
      icon: <Zap className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: "Sumerian Mysteries",
      description: "Decoding ancient Sumerian texts and artifacts",
      icon: <Book className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80"
    },
    {
      title: "Akashic Records",
      description: "Accessing universal knowledge and wisdom",
      icon: <Database className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80"
    },
    {
      title: "Celestial Knowledge",
      description: "Ancient astronomy and cosmic connections",
      icon: <Star className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80"
    },
    {
      title: "Trending Topics",
      description: "Latest discoveries and discussions",
      icon: <TrendingUp className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
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
            Ancient Archives
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated collection of knowledge across various mystical and scientific domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-purple-600 p-2 rounded-full">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-400">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sacred Texts Section */}
        <section className="pt-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Sacred Texts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Book of Enoch",
                author: "Unknown",
                description: "Ancient text describing celestial beings and cosmic knowledge",
                image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80"
              },
              {
                title: "Emerald Tablets",
                author: "Hermes Trismegistus",
                description: "Foundational hermetic teachings of ancient wisdom",
                image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80"
              }
            ].map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="card flex gap-6"
              >
                <div className="w-1/3">
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-2/3 space-y-4">
                  <h3 className="text-xl font-semibold">{book.title}</h3>
                  <p className="text-gray-400 text-sm">{book.author}</p>
                  <p className="text-gray-300">{book.description}</p>
                  <button className="btn-primary">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Topics;