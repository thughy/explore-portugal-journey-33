
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ImageOff, Play } from 'lucide-react';

interface DestinationCardProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  video?: string;
  delay?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  id, 
  name, 
  description, 
  image,
  video,
  delay = '' 
}) => {
  const [mediaError, setMediaError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [isVideo] = useState(!!video);
  
  const fallbackImage = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80';

  return (
    <Link 
      to={`/destination/${id}`} 
      className={`group block rounded-2xl overflow-hidden shadow-md h-full card-hover ${delay}`}
    >
      <div className="relative aspect-[3/4] md:aspect-square w-full overflow-hidden bg-gray-100">
        {mediaError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 p-4">
            <ImageOff size={32} className="text-gray-400 mb-2" />
            <span className="text-xs text-gray-500 text-center">Mídia indisponível</span>
          </div>
        ) : isVideo ? (
          <div className="relative w-full h-full">
            <video 
              className="w-full h-full object-cover"
              poster={image || fallbackImage}
              muted
              loop
              playsInline
              onError={() => setMediaError(true)}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support video.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
                <Play size={24} className="text-white fill-white" />
              </div>
            </div>
          </div>
        ) : (
          <>
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-8 h-8 border-4 border-portugal-terracotta/30 border-t-portugal-terracotta rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={image || fallbackImage} 
              alt={name} 
              className={`w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              loading="lazy"
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setMediaError(true);
                setImageLoading(false);
              }}
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-1">{name}</h3>
          <p className="text-sm text-white/80 line-clamp-2">{description}</p>
          
          <div className="flex items-center mt-4 text-sm text-portugal-terracotta font-medium opacity-0 transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span>{isVideo ? 'Assistir vídeo' : 'Descobrir mais'}</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
