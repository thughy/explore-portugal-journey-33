
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  delay?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  id, 
  name, 
  description, 
  image,
  delay = '' 
}) => {
  return (
    <Link 
      to={`/destination/${id}`} 
      className={`group block rounded-2xl overflow-hidden shadow-md h-full card-hover ${delay}`}
    >
      <div className="relative aspect-[3/4] md:aspect-square w-full overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80';
            target.onerror = null; // Prevent infinite fallback loop
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-1">{name}</h3>
          <p className="text-sm text-white/80 line-clamp-2">{description}</p>
          
          <div className="flex items-center mt-4 text-sm text-portugal-terracotta font-medium opacity-0 transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span>Descobrir mais</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
