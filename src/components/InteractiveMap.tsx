
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  position: { top: string; left: string };
}

const destinations: Destination[] = [
  { id: 'porto', name: 'Porto', position: { top: '25%', left: '15%' } },
  { id: 'lisbon', name: 'Lisbon', position: { top: '48%', left: '15%' } },
  { id: 'algarve', name: 'Algarve', position: { top: '75%', left: '20%' } },
  { id: 'madeira', name: 'Madeira', position: { top: '85%', left: '5%' } },
  { id: 'azores', name: 'Azores', position: { top: '40%', left: '3%' } },
];

const InteractiveMap = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-lg h-[70vh] md:h-[80vh]">
      <img 
        src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920"
        alt="Map of Portugal" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black/10" />
      
      {destinations.map((destination) => (
        <Link
          key={destination.id}
          to={`/destination/${destination.id}`}
          className="absolute group"
          style={{ top: destination.position.top, left: destination.position.left }}
        >
          <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-110">
            <div className="relative">
              <span className="absolute -inset-0.5 animate-pulse-slow rounded-full bg-portugal-terracotta/50 blur-sm"></span>
              <MapPin size={32} className="text-portugal-terracotta drop-shadow-lg animate-float" />
            </div>
            <span className="mt-1 px-2 py-0.5 rounded-full text-sm font-medium text-white bg-black/50 backdrop-blur-sm">
              {destination.name}
            </span>
          </div>
        </Link>
      ))}

      <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="text-xl font-display font-bold text-portugal-navy mb-2">
          Discover Portugal
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Click on a location to explore the regions and find detailed travel guides, tips, and attractions.
        </p>
        <div className="flex flex-wrap gap-2">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destination/${destination.id}`}
              className="px-3 py-1 bg-white rounded-full text-sm font-medium text-portugal-navy border border-gray-200 hover:bg-portugal-navy hover:text-white transition-colors"
            >
              {destination.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
