import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      if (window.innerWidth >= 768) { // Only apply active section highlighting for desktop
        const sections = ["home", "about", "showcase", "contact"];
        let currentSection = "";

        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = section;
            }
          }
        });

        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 group" onClick={closeMenu}>
              <Leaf className="h-8 w-8 text-[#2E7D32] transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl font-bold text-[#2E7D32]">Ketiwa Enterprise</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "showcase", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-black-800 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#2E7D32] after:transition-all hover:after:w-full ${
                  activeSection === section ? "text-[#2E7D32] font-bold after:w-full" : "hover:text-[#2E7D32]"
                }`}
              >
                {section === "home" ? "Home" : section === "about" ? "About Us" : section === "showcase" ? "Our Products" : "Contact Us"}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#2E7D32] focus:outline-none transition-transform duration-300"
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
          <div className="md:hidden bg-white/95 backdrop-blur-sm animate-fadeInDown absolute w-full left-0 top-14 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "showcase", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block px-3 py-2 text-gray-800 hover:text-[#2E7D32] transition-colors"
                  onClick={closeMenu}
                >
                  {section === "home" ? "Home" : section === "about" ? "About Us" : section === "showcase" ? "Our Products" : "Contact Us"}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
