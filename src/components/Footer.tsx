import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/media">Media</FooterLink>
              <FooterLink to="/topics">Topics</FooterLink>
              <FooterLink to="/community">Community</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://youtube.com" icon={<Youtube />} />
              <SocialLink href="https://twitter.com" icon={<Twitter />} />
              <SocialLink href="https://clubhouse.com" icon={<MessageCircle />} />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Project Anu's Gate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <div>
    <Link
      to={to}
      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
    >
      {children}
    </Link>
  </div>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Footer;