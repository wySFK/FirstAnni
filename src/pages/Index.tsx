import React from 'react';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/Home/HeroSection';
import MemoriesSection from '@/components/Home/MemoriesSection';
import QuoteSection from '@/components/Home/QuoteSection';
import MessageSection from '@/components/Home/MessageSection';

const Index = () => {
  // Set anniversary date to tomorrow
  const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const anniversaryDate = tomorrow.toISOString().split('T')[0]; // Format as YYYY-MM-DD

  return (
    <Layout>
      <HeroSection anniversaryDate={anniversaryDate} />
      <MemoriesSection />
      <QuoteSection />
      <MessageSection />
    </Layout>
  );
};

export default Index;