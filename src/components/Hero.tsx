
import React, { useState, useEffect } from 'react';
import { ChevronDown, ImageOff, PlayCircle } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [posterError, setPosterError] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const fallbackImage = "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1920&q=80";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {videoError ? (
          posterError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800">
              <ImageOff size={64} className="text-white/50 mb-4" />
              <p className="text-white/70 font-medium">Não foi possível carregar o vídeo</p>
            </div>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80"
              alt="Portugal landscape"
              className="object-cover h-full w-full"
              onError={() => setPosterError(true)}
            />
          )
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover h-full w-full"
            poster="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80"
            onCanPlayThrough={() => setLoaded(true)}
            onError={() => setVideoError(true)}
          >
            <source
              src="https://player.vimeo.com/external/517090081.hd.mp4?s=ce49c8c6d8e28a85542583516a69a6c2c7ee71c7&profile_id=175&oauth2_token_id=57447761"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className={`max-w-5xl transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block text-portugal-terracotta font-medium text-lg md:text-xl mb-3 animate-fade-in">
            Discover Portugal's Hidden Wonders
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 text-shadow-lg animate-slide-up">
            Explore The Beauty of <span className="text-portugal-sand">Portugal</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-up-delay-1">
            From stunning coastlines to historic cities, experience the authentic culture, cuisine, and landscapes of this incredible country.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up-delay-2">
            <button className="px-8 py-3 bg-portugal-terracotta text-white rounded-full font-medium hover:bg-portugal-terracotta/90 transition-colors shadow-lg">
              Explore Destinations
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur text-white rounded-full font-medium hover:bg-white/20 transition-colors border border-white/25 flex items-center">
              <PlayCircle size={20} className="mr-2" />
              Watch Videos
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
