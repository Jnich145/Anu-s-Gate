import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-6">About Project Anu's Gate</h2>
          <p className="text-lg text-gray-300">
            We are dedicated to exploring the intersection of ancient wisdom and modern discovery. 
            Through rigorous research and open dialogue, we investigate the mysteries of our cosmic 
            heritage, from ancient civilizations to cutting-edge frequency science.
          </p>
          <p className="text-lg text-gray-300">
            Join us on this journey of discovery as we unlock the secrets of our past and their 
            implications for our future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;