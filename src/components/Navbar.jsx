import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 group" onClick={closeMenu}>
              <Leaf className="h-8 w-8 text-[#1e3a8a] transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl font-bold text-[#1e3a8a]">Ketiwa Enterprise</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-[#1e3a8a] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#1e3a8a] after:transition-all hover:after:w-full">Home</a>
            <a href="#about" className="text-gray-800 hover:text-[#1e3a8a] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#1e3a8a] after:transition-all hover:after:w-full">About Us</a>
            <a href="#showcase" className="text-gray-800 hover:text-[#1e3a8a] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#1e3a8a] after:transition-all hover:after:w-full">Our Products</a>
            <a 
              href="#contact" 
              className="px-4 py-2 bg-[#1e3a8a] text-white rounded-md hover:bg-[#152b67] transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#1e3a8a] focus:outline-none transition-transform duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6 animate-fadeIn" />
              ) : (
                <Menu className="h-6 w-6 animate-fadeIn" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm animate-fadeInDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-800 hover:text-[#1e3a8a] transition-colors"
                onClick={closeMenu}

              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-800 hover:text-[#1e3a8a] transition-colors"
                onClick={closeMenu}
              >
                About Us
              </a>
              <a
                href="#showcase"
                className="block px-3 py-2 text-gray-800 hover:text-[#1e3a8a] transition-colors"
                onClick={closeMenu}
              >
                Our Products
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-[#1e3a8a] font-medium"
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;