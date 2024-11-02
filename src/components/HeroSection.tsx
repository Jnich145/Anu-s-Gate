import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, ArrowDown } from 'lucide-react';
import Background3D from './Background3D';

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex items-center justify-center text-center px-4"
    >
      <Background3D />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <KeyRound className="w-16 h-16 mx-auto mb-6 text-purple-400" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Enter the Gate to Ancient Wisdom
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unveil the mysteries of our cosmic heritage through ancient knowledge and modern discovery
          </p>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Discover More
            <ArrowDown className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;