import React from 'react';
import { Link } from 'react-router-dom';
import { CircuitBoard } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <CircuitBoard className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Anu's Gate
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/topics">Topics</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navbar;