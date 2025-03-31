
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const messages = [
  "You make my heart smile every single day.",
  "This year with you has been the most beautiful chapter of my life.",
  "Thank you for being my partner, my best friend, and my favorite person.",
  "I fall in love with your smile all over again each morning.",
  "With you, even ordinary moments become extraordinary memories.",
  "I'm so grateful that our paths crossed and our hearts connected."
];

const MessageSection: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-mono-200"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-mono-100"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full bg-mono-300/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-mono-100 mb-8">
            <Heart className="text-mono-800 mr-2" size={20} />
            <span className="text-mono-700 font-medium">From My Heart to Yours</span>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl p-8 mb-10 min-h-[200px] flex items-center justify-center">
            <p className="text-xl md:text-2xl font-dancing animate-fade-in">
              "{messages[currentMessage]}"
            </p>
          </div>
          
          <Button asChild className="bg-mono-800 hover:bg-mono-900 transition">
            <Link to="/letter" className="inline-flex items-center gap-2">
              <span>Read My Love Letter</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
