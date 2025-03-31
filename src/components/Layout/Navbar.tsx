
import React from 'react';
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/20 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="text-mono-800 animate-heartbeat" size={24} />
          <span className="font-dancing text-2xl font-bold text-mono-800">Our Love Story</span>
        </Link>
        
        <div className="flex gap-6">
          <Link to="/" className="text-mono-800 hover:text-mono-600 transition-colors font-medium">Home</Link>
          <Link to="/timeline" className="text-mono-800 hover:text-mono-600 transition-colors font-medium">Our Timeline</Link>
          <Link to="/gallery" className="text-mono-800 hover:text-mono-600 transition-colors font-medium">Gallery</Link>
          <Link to="/letter" className="text-mono-800 hover:text-mono-600 transition-colors font-medium">Love Letter</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
