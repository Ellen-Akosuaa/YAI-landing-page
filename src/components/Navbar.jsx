// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="p-6 flex justify-center align-middle bg-amber-200">
//       <h4 className="text-xl font-bold">Navbar</h4>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-[#00A859]" />
              <span className="text-xl font-bold text-[#00A859]">Ketiwa Ent.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#00A859] transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#00A859] transition-colors">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-[#00A859] transition-colors">Services</a>
            <a href="#mission" className="text-gray-700 hover:text-[#00A859] transition-colors">Mission</a>
            <a href="#contact" className="px-4 py-2 bg-[#00A859] text-white rounded-md hover:bg-[#008647] transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#00A859] focus:outline-none"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-[#00A859] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-[#00A859] transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-[#00A859] transition-colors"
              >
                Services
              </a>
              <a
                href="#mission"
                className="block px-3 py-2 text-gray-700 hover:text-[#00A859] transition-colors"
              >
                Mission
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-[#00A859] font-medium"
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