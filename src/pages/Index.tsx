
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import TravelTip from '@/components/TravelTip';
import InteractiveMap from '@/components/InteractiveMap';
import { Compass, Briefcase, CreditCard, Train, Utensils, SunMedium, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 'lisbon',
    name: 'Lisbon',
    description: 'Portugal\'s vibrant capital with rich history, colorful neighborhoods, and delicious pastéis de nata.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'porto',
    name: 'Porto',
    description: 'Famous for port wine, stunning bridges, and riverside charm along the Douro.',
    image: 'https://images.unsplash.com/photo-1555881400-a4fab944f30b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'algarve',
    name: 'Algarve',
    description: 'Beautiful golden beaches, dramatic cliffs, and charming coastal towns in southern Portugal.',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'madeira',
    name: 'Madeira',
    description: 'A lush island paradise with dramatic landscapes, hiking trails, and unique culture.',
    image: 'https://images.unsplash.com/photo-1599484481979-3b85288a20a1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'azores',
    name: 'Azores',
    description: 'Remote volcanic islands with emerald lakes, hot springs, and whale watching opportunities.',
    image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=800&q=80'
  }
];

const travelTips = [
  {
    icon: <Compass />,
    title: 'Navigation',
    description: 'Public transportation is excellent in major cities. Consider the Lisboa Card for unlimited travel and museum access.'
  },
  {
    icon: <CreditCard />,
    title: 'Currency',
    description: 'Portugal uses the Euro (€). Credit cards are widely accepted, but carry some cash for small establishments.'
  },
  {
    icon: <Briefcase />,
    title: 'Packing',
    description: 'Pack layers even in summer. Bring comfortable shoes for cobblestone streets and sunscreen for beach days.'
  },
  {
    icon: <Train />,
    title: 'Transportation',
    description: 'Trains connect major cities, while buses reach smaller towns. Consider renting a car to explore rural areas.'
  },
  {
    icon: <Utensils />,
    title: 'Dining',
    description: 'Lunch is typically 12-3pm and dinner starts after 7:30pm. Try the local specialties like bacalhau and pastéis de nata.'
  },
  {
    icon: <SunMedium />,
    title: 'Weather',
    description: 'Portugal enjoys a Mediterranean climate with hot summers and mild winters. Spring and fall are ideal for sightseeing.'
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-portugal-terracotta font-medium mb-2 animate-fade-in">
              Incredible Places
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4 animate-slide-up">
              Top Destinations in Portugal
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 animate-slide-up-delay-1">
              From historic cities to stunning beaches and breathtaking landscapes, discover the most beautiful destinations Portugal has to offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                {...destination}
                delay={`animate-slide-up-delay-${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="#"
              className="inline-flex items-center text-portugal-terracotta hover:text-portugal-navy font-medium transition-colors"
            >
              View all destinations
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Travel Tips */}
      <section id="tips" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-portugal-terracotta font-medium mb-2">
              Essential Knowledge
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4">
              Travel Tips for Portugal
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Make the most of your journey with these practical tips and recommendations for traveling in Portugal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelTips.map((tip, index) => (
              <TravelTip
                key={index}
                {...tip}
                variant={index === 0 ? "filled" : "default"}
                className={index === 3 ? "lg:col-span-3 xl:col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section id="map" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-portugal-terracotta font-medium mb-2">
              Visual Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4">
              Interactive Map
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore Portugal's regions and plan your perfect itinerary with our interactive map.
            </p>
          </div>
          
          <InteractiveMap />
        </div>
      </section>
      
      {/* Itineraries */}
      <section id="itineraries" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-portugal-terracotta font-medium mb-2">
              Curated Journeys
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4">
              Recommended Itineraries
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Follow these carefully crafted itineraries to experience the best of Portugal based on your interests and time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80" 
                  alt="Classic Portugal Tour" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-portugal-sand/25 text-portugal-navy text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                  7-10 Days
                </span>
                <h3 className="text-xl font-display font-bold text-portugal-navy mb-2">Classic Portugal Tour</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Experience the essential highlights of Portugal including Lisbon, Sintra, Porto, and the Douro Valley.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center text-portugal-terracotta hover:text-portugal-navy font-medium transition-colors"
                >
                  View itinerary
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80" 
                  alt="Nature & Adventure" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-portugal-sand/25 text-portugal-navy text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                  10-14 Days
                </span>
                <h3 className="text-xl font-display font-bold text-portugal-navy mb-2">Nature & Adventure</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore Portugal's natural wonders from the lush forests of Madeira to the volcanic landscapes of the Azores.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center text-portugal-terracotta hover:text-portugal-navy font-medium transition-colors"
                >
                  View itinerary
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80" 
                  alt="Food & Wine Tour" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-portugal-sand/25 text-portugal-navy text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                  7-10 Days
                </span>
                <h3 className="text-xl font-display font-bold text-portugal-navy mb-2">Food & Wine Tour</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Indulge in Portugal's gastronomic delights from port wine tastings in the Douro Valley to seafood in the Algarve.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center text-portugal-terracotta hover:text-portugal-navy font-medium transition-colors"
                >
                  View itinerary
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-portugal-terracotta">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Get Travel Updates & Tips
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest travel information, exclusive offers, and insider tips for exploring Portugal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-5 py-3 rounded-full bg-white border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-white/30 w-full"
              />
              <button className="px-6 py-3 bg-portugal-navy text-white rounded-full font-medium hover:bg-portugal-navy/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
