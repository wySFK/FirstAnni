
import React, { useEffect, useState } from 'react';
import { Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  anniversaryDate: string; // Format: "YYYY-MM-DD"
}

const HeroSection: React.FC<HeroSectionProps> = ({ anniversaryDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(anniversaryDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If anniversary has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    const timer = setInterval(() => calculateTimeLeft(), 1000);
    
    return () => clearInterval(timer);
  }, [anniversaryDate]);
  
  return (
    <section className="relative overflow-hidden py-24 md:py-32 min-h-[calc(100vh-8rem)]">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-mono-100 opacity-60 blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-mono-200 opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-mono-50/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-4 animate-float">
            <Heart size={48} className="text-mono-800 animate-pulse-gentle" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-dancing mb-6 animate-fade-in">
            <span className="text-gradient">Our First Anniversary</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8 text-mono-800 animate-fade-in">
            Celebrating one beautiful year of love, laughter, and memories together
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-10 w-full max-w-xl animate-fade-in">
            <h2 className="flex items-center justify-center gap-2 text-xl font-medium mb-4 text-mono-700">
              <Calendar className="text-mono-800" />
              <span>Anniversary Countdown</span>
            </h2>
            
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-mono-800 text-white rounded-lg w-full py-3 text-2xl font-bold">
                    {item.value}
                  </div>
                  <span className="text-sm mt-2 text-mono-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="bg-mono-800 hover:bg-mono-900">
              <Link to="/timeline">Our Journey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-mono-400 text-mono-700 hover:bg-mono-50">
              <Link to="/letter">Love Letter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
