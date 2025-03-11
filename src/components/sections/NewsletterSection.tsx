
import React from 'react';

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
