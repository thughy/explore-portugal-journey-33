
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ItinerariesSection = () => {
  return (
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
          <ItineraryCard 
            title="Classic Portugal Tour"
            duration="7-10 Days"
            description="Experience the essential highlights of Portugal including Lisbon, Sintra, Porto, and the Douro Valley."
            image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
          />
          
          <ItineraryCard 
            title="Nature & Adventure"
            duration="10-14 Days"
            description="Explore Portugal's natural wonders from the lush forests of Madeira to the volcanic landscapes of the Azores."
            image="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
          />
          
          <ItineraryCard 
            title="Food & Wine Tour"
            duration="7-10 Days"
            description="Indulge in Portugal's gastronomic delights from port wine tastings in the Douro Valley to seafood in the Algarve."
            image="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
};

interface ItineraryCardProps {
  title: string;
  duration: string;
  description: string;
  image: string;
}

const ItineraryCard = ({ title, duration, description, image }: ItineraryCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-portugal-sand/25 text-portugal-navy text-xs font-medium px-2.5 py-1 rounded-full mb-3">
          {duration}
        </span>
        <h3 className="text-xl font-display font-bold text-portugal-navy mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {description}
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
  );
};

export default ItinerariesSection;
