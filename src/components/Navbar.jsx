import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-[#1e3a8a]" />
              <span className="text-xl font-bold text-[#1e3a8a]">Ketiwa Enterprise</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-[#1e3a8a] transition-colors">Home</a>
            <a href="#about" className="text-gray-800 hover:text-[#1e3a8a] transition-colors">About Us</a>
            {/* <a href="#services" className="text-gray-800 hover:text-[#1e3a8a] transition-colors">Services</a> */}
            <a href="#showcase" className="text-gray-800 hover:text-[#1e3a8a] transition-colors">Our Products</a>
            <a href="#contact" className="px-4 py-2 bg-[#1e3a8a] text-white rounded-md hover:bg-[#152b67] transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#1e3a8a] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-800 hover:text-[#1e3a8a] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-800 hover:text-[#1e3a8a] transition-colors"
              >
                About Us
              </a>
              <a
                href="#showcase"
                className="block px-3 py-2 text-gray-800 hover:text-[#1e3a8a] transition-colors"
              >
                Our Products
              </a>
              {/* <a
                href="#mission"
                className="block px-3 py-2 text-gray-800 hover:text-[#1e3a8a] transition-colors"
              >
                Mission
              </a> */}
              <a
                href="#contact"
                className="block px-3 py-2 text-[#1e3a8a] font-medium"
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