
import React from 'react';
import { Heart, Star } from "lucide-react";

const LoveLetterSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-mono-100/50 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-mono-200/40 blur-2xl"></div>
      <div className="absolute bottom-20 -left-20 w-60 h-60 rounded-full bg-mono-100/40 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <Heart className="text-mono-600 mr-2" size={28} />
              <h1 className="text-4xl font-dancing font-bold text-gradient">My Love Letter to You</h1>
              <Heart className="text-mono-600 ml-2" size={28} />
            </div>
            <p className="text-mono-700">
              On our first anniversary
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-mono-100">
            <div className="prose prose-gray max-w-none">
              <p className="font-dancing text-2xl mb-6">To the love of my life,</p>
              
              <p className="mb-4">
              Every day spent with you is a blessing, and I am grateful for each and every moment we share. 
              You make my life complete in ways that I never knew were possible, and I cannot imagine a future without you in it.

              </p>
              
              <p className="mb-4">
              Imong love and support have been the foundation of satong relationship, and I am thankful saimong unwavering commitment to our love.


              </p>
              
              <p className="mb-4">
              Every day, I thank God for blessing me with you, my love. He answered my prayers and gave me the woman I had been waiting and praying for my entire life. 
              You are the greatest gift I could ever receive, and I will always cherish you.
              </p>
              
              <p className="mb-4">
              Through every shared laugh, every challenge atong na faced, and even sa mga quiet moments where words kay dili needed, my love for you has only grown stronger. 
              Gi tudloan ko nimo lovey what it truly means to love and be loved, to be seen and understood in a way I never thought possible. For that, and saimoha, I am endlessly grateful.

              </p>


              <p className="mb-4">
              Thank you for always caring for me, for loving me so deeply, and for choosing me every single day for exactly who I am. Your love has been my greatest source of strength and happiness, and with you, I’ve discovered a kind of peace and joy I never knew existed.
              </p>

              <p className="mb-4">
              You are my best friend, my safe place, my greatest love. Imong smile has a way of brightening sakong mga darkest days, and imong strength og kindness inspire sakoa to be a better person and a better version of who I am.
              </p>
              
              <p className="mb-4">
                As we celebrate this first milestone of many to come, I want you to know that my heart is yours – completely and without reservation. 
                I promise to continue choosing you every day, to love you through every season of life, and to cherish every moment atong ma create together.
              </p>
              
              <p className="mb-4">
                Happy anniversary, my love. Here's satong first year and to all the beautiful years ahead satoa. 
                Atong story kay just beginning, and I can't wait sad lovey to see where atong love takes us next.
              </p>
              
              <div className="mt-8">
                <p className="font-dancing text-2xl">Forever yours,</p>
                <p className="font-dancing text-2xl mt-2">Wyslie Van</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="text-mono-400" size={20} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
