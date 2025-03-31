
import React from 'react';
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 border-t border-mono-200">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <Heart size={16} className="text-mono-600" />
          <span className="text-sm text-mono-700">Made with love for our anniversary</span>
          <Heart size={16} className="text-mono-600" />
        </div>
        <p className="text-xs text-mono-500">© {currentYear} Our Love Story</p>
      </div>
    </footer>
  );
};

export default Footer;
