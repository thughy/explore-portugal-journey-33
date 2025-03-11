
import React from 'react';
import { ArrowRight } from 'lucide-react';
import DestinationCard from '@/components/DestinationCard';

export const destinations = [
  {
    id: 'lisbon',
    name: 'Lisbon',
    description: 'Portugal\'s vibrant capital with rich history, colorful neighborhoods, and delicious pastéis de nata.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80',
    video: 'https://player.vimeo.com/external/404142015.hd.mp4?s=3c61b8de89c32aa97c9984572542135de6eebf99&profile_id=175&oauth2_token_id=57447761'
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
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
    video: 'https://player.vimeo.com/external/370331493.hd.mp4?s=e744efce5cdcd1041e72cf51c520fc988da71923&profile_id=175&oauth2_token_id=57447761'
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
    image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=800&q=80',
    video: 'https://player.vimeo.com/external/414726887.hd.mp4?s=5393cd2277ba9d136cffc2562e82f5f07a02d10a&profile_id=175&oauth2_token_id=57447761'
  }
];

const DestinationsSection = () => {
  return (
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
  );
};

export default DestinationsSection;
