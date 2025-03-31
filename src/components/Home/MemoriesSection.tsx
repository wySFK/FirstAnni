
import React from 'react';
import { Image, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const memories = [
  {
    id: 1,
    title: "I",
    description: "",
    image: "src/images/iloveher.jpg"
  },
  {
    id: 2,
    title: "LOVE",
    description: "",
    image: "src/images/11.jpg"
  },
  {
    id: 3,
    title: "YOU",
    description: "",
    image: "src/images/4.jpg"
  }
];

const MemoriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-love-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-flex items-center gap-2">
            <Heart className="text-love-500" size={24} />
            <span>Our Memories</span>
            <Heart className="text-love-500" size={24} />
          </h2>
          <p className="text-love-700 max-w-xl mx-auto">
            A glimpse of the moments nga we've shared in our first year together, my loveey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {memories.map((memory, index) => (
            <div 
              key={memory.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg ${
                index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"
              }`}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={memory.image} 
                  alt={memory.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-1 text-love-800">{memory.title}</h3>
                <p className="text-love-600">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-love-400 text-love-700 hover:bg-love-50">
            <Link to="/gallery" className="inline-flex items-center gap-2">
              <Image size={18} />
              <span>View All Photos</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
