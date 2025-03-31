
import React from 'react';
import { Quote } from "lucide-react";

const QuoteSection: React.FC = () => {
  return (
    <section className="py-24 love-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto mb-6 opacity-80" size={48} />
          
          <blockquote className="text-2xl md:text-3xl font-playfair italic mb-6">
            "I fell in love with you because of all the little things you never knew you were doing."
          </blockquote>
          
          <p className="text-lg font-light opacity-90">
            — A year of falling more in love every day
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
