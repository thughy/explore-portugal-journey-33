
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import DestinationsSection from '@/components/sections/DestinationsSection';
import TravelTipsSection from '@/components/sections/TravelTipsSection';
import RegionalTipsSection from '@/components/sections/RegionalTipsSection';
import MapSection from '@/components/sections/MapSection';
import LanguageTipsSection from '@/components/sections/LanguageTipsSection';
import ItinerariesSection from '@/components/sections/ItinerariesSection';
import FAQSection from '@/components/sections/FAQSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import VideoShowcase from '@/components/sections/VideoShowcase';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DestinationsSection />
      <VideoShowcase />
      <TravelTipsSection />
      <RegionalTipsSection />
      <MapSection />
      <LanguageTipsSection />
      <ItinerariesSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
