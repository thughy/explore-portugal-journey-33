
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center z-50"
        >
          <span className={`font-display text-2xl font-bold transition-colors duration-300 ${
            isScrolled || isMenuOpen || isMobile ? 'text-portugal-navy' : 'text-white text-shadow'
          }`}>
            Explore<span className="text-portugal-terracotta">Portugal</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center space-x-8 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <div className="group relative">
            <button className="flex items-center space-x-1 py-2 font-medium hover:text-portugal-terracotta transition-colors">
              <span>Destinations</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1 px-2">
                <Link to="/destination/lisbon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-portugal-navy/5 rounded-md">Lisbon</Link>
                <Link to="/destination/porto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-portugal-navy/5 rounded-md">Porto</Link>
                <Link to="/destination/algarve" className="block px-4 py-2 text-sm text-gray-700 hover:bg-portugal-navy/5 rounded-md">Algarve</Link>
                <Link to="/destination/madeira" className="block px-4 py-2 text-sm text-gray-700 hover:bg-portugal-navy/5 rounded-md">Madeira</Link>
                <Link to="/destination/azores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-portugal-navy/5 rounded-md">Azores</Link>
              </div>
            </div>
          </div>
          <Link to="#tips" className="py-2 font-medium hover:text-portugal-terracotta transition-colors">
            Travel Tips
          </Link>
          <Link to="#itineraries" className="py-2 font-medium hover:text-portugal-terracotta transition-colors">
            Itineraries
          </Link>
          <Link to="#map" className="py-2 font-medium hover:text-portugal-terracotta transition-colors">
            Map
          </Link>
        </nav>

        <div className={`hidden md:flex items-center space-x-3 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Globe size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 p-2 rounded-full transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className={`${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu size={24} className={`${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="h-full flex flex-col pt-20 pb-6 px-6">
            <nav className="flex flex-col space-y-5 text-xl font-medium">
              <Link 
                to="/" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="py-2 border-b border-gray-100">
                <span className="font-display text-lg font-semibold text-portugal-navy">Destinations</span>
                <div className="ml-4 mt-2 flex flex-col space-y-3">
                  <Link 
                    to="/destination/lisbon" 
                    className="text-base text-gray-600 hover:text-portugal-terracotta"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Lisbon
                  </Link>
                  <Link 
                    to="/destination/porto" 
                    className="text-base text-gray-600 hover:text-portugal-terracotta"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Porto
                  </Link>
                  <Link 
                    to="/destination/algarve" 
                    className="text-base text-gray-600 hover:text-portugal-terracotta"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Algarve
                  </Link>
                  <Link 
                    to="/destination/madeira" 
                    className="text-base text-gray-600 hover:text-portugal-terracotta"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Madeira
                  </Link>
                  <Link 
                    to="/destination/azores" 
                    className="text-base text-gray-600 hover:text-portugal-terracotta"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Azores
                  </Link>
                </div>
              </div>
              <Link 
                to="#tips" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Travel Tips
              </Link>
              <Link 
                to="#itineraries" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Itineraries
              </Link>
              <Link 
                to="#map" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Map
              </Link>
            </nav>
            <div className="mt-auto flex space-x-4">
              <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                <Globe size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
