
import React, { useState } from 'react';
import { PlayCircle, X } from 'lucide-react';

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const playVideo = (videoSrc: string) => {
    setActiveVideo(videoSrc);
  };
  
  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-portugal-terracotta font-medium mb-2">
            <PlayCircle size={16} className="inline mr-1" />
            Video Tours
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4">
            Experience Portugal in Motion
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore the beauty of Portugal through immersive video content that showcases the country's most stunning landscapes and vibrant culture.
          </p>
        </div>
        
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-12">
          <video
            className="w-full h-full object-cover"
            controls
            poster="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80"
          >
            <source 
              src="https://player.vimeo.com/external/636154725.hd.mp4?s=9367c51d4a4f29a6a8d5644b200ef3dd559e6ed8&profile_id=175&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoThumbnails.map((video, index) => (
            <VideoThumbnail 
              key={index} 
              {...video} 
              onClick={() => playVideo(video.videoSrc)}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeVideo}
            className="absolute top-6 right-6 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="w-full max-w-5xl aspect-video relative">
            <video 
              className="w-full h-full"
              controls 
              autoPlay
              src={activeVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

interface VideoThumbnailProps {
  title: string;
  description: string;
  poster: string;
  videoSrc: string;
  onClick: () => void;
}

const VideoThumbnail = ({ title, description, poster, videoSrc, onClick }: VideoThumbnailProps) => {
  return (
    <div 
      className="relative aspect-video rounded-xl overflow-hidden shadow-md group cursor-pointer"
      onClick={onClick}
    >
      <video
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        poster={poster}
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
        <h3 className="text-lg font-display font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-white/80 line-clamp-2">{description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
          <PlayCircle size={24} className="text-white fill-white" />
        </div>
      </div>
    </div>
  );
};

const videoThumbnails = [
  {
    title: "Lisbon Street Life",
    description: "Explore the vibrant streets and culture of Portugal's capital city",
    poster: "https://images.unsplash.com/photo-1592853598064-16c31ddb0455?auto=format&fit=crop&w=800&q=80",
    videoSrc: "https://player.vimeo.com/external/475689375.hd.mp4?s=5d584030af0cbafed86065d78f0818f0daf44f31&profile_id=175&oauth2_token_id=57447761"
  },
  {
    title: "Douro Valley Vineyards",
    description: "Journey through Portugal's world-famous wine region",
    poster: "https://images.unsplash.com/photo-1577956249505-5b58d6f82938?auto=format&fit=crop&w=800&q=80",
    videoSrc: "https://player.vimeo.com/external/449933439.hd.mp4?s=4aeaa0925cd3ec98df49517242dff93eafb7c46a&profile_id=175&oauth2_token_id=57447761"
  },
  {
    title: "Algarve's Hidden Beaches",
    description: "Discover the stunning coastal landscapes of southern Portugal",
    poster: "https://images.unsplash.com/photo-1533588501183-89a86c61a5ff?auto=format&fit=crop&w=800&q=80",
    videoSrc: "https://player.vimeo.com/external/446583208.hd.mp4?s=7bcddbdc5efe6d09eb5af82cc3d3baee2b3a59e3&profile_id=175&oauth2_token_id=57447761"
  }
];

export default VideoShowcase;
