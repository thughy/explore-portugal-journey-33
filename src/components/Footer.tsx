
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail, Map, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portugal-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold">
                Explore<span className="text-portugal-terracotta">Portugal</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm">
              Your ultimate guide to discovering the beauty, culture, and experiences that Portugal has to offer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-portugal-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-portugal-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-portugal-terracotta transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-portugal-terracotta transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/destination/lisbon" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Lisbon</Link></li>
              <li><Link to="/destination/porto" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Porto</Link></li>
              <li><Link to="/destination/algarve" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Algarve</Link></li>
              <li><Link to="/destination/madeira" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Madeira</Link></li>
              <li><Link to="/destination/azores" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Azores</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#tips" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Travel Tips</Link></li>
              <li><Link to="#itineraries" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Itineraries</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Transportation</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Accommodation</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-portugal-terracotta transition-colors">Sustainable Travel</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 text-portugal-terracotta" />
                <span className="text-gray-300">hello@exploreportugal.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 text-portugal-terracotta" />
                <span className="text-gray-300">+351 123 456 789</span>
              </li>
              <li className="flex items-start">
                <Map size={18} className="mr-2 mt-0.5 text-portugal-terracotta" />
                <span className="text-gray-300">Lisbon, Portugal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Explore Portugal. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-start space-x-6">
            <Link to="#" className="hover:text-portugal-terracotta transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-portugal-terracotta transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-portugal-terracotta transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
