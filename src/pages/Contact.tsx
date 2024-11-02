import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Youtube, Twitter, Radio } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            The Oracle's Contact
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reach out to us with your questions about ancient wisdom, cosmic mysteries, or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                <Mail className="inline-block mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Newsletter Signup */}
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Newsletter</h2>
              <p className="text-gray-400 mb-6">
                Subscribe to receive updates about new content, events, and discoveries.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                />
                <button type="submit" className="w-full btn-primary">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Youtube className="h-6 w-6 text-red-500" />
                  <span>YouTube</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Twitter className="h-6 w-6 text-blue-400" />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Radio className="h-6 w-6 text-green-400" />
                  <span>Clubhouse</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <MessageCircle className="h-6 w-6 text-pink-400" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How can I contribute?</h3>
                  <p className="text-gray-400">
                    Join our community and share your knowledge through discussions, articles, or video content.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">When are live events?</h3>
                  <p className="text-gray-400">
                    We host live Q&A sessions and workshops regularly. Check our events calendar for upcoming dates.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;