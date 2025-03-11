
import React from 'react';
import InteractiveMap from '@/components/InteractiveMap';

const MapSection = () => {
  return (
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
  );
};

export default MapSection;
