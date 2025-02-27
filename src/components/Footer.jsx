import React, { useEffect, useRef } from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, Leaf } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = footerRef.current.querySelectorAll('.footer-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" ref={footerRef}>
      <div className="bg-[#2E7D32] text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Brief Description */}
            <div className="footer-reveal">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Leaf className="h-6 w-6 text-white/90" />
                <h4 className="text-lg sm:text-xl font-semibold text-white/90">
                  Ketiwa Enterprise
                </h4>
              </div>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                At Ketiwa Enterprise, we're dedicated to bringing you the finest quality spices and natural remedies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-reveal">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white/90">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#home" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center text-sm sm:text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center text-sm sm:text-base">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#ceo" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center text-sm sm:text-base">
                    Our CEO
                  </a>
                </li>
                <li>
                  <a href="#showcase" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center text-sm sm:text-base">
                    Our Products
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-reveal">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white/90">
                Contact Info
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center space-x-3 text-white/80 group">
                  <MapPin className="w-5 h-5 flex-shrink-0 group-hover:text-white/100 transition-colors" />
                  <span className="group-hover:text-white transition-colors text-sm sm:text-base">Goaso - Ahafo Region, Municipal Assembly Area</span>
                </li>
                <li className="flex items-center space-x-3 text-white/80 group">
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:text-white/100 transition-colors" />
                  <span className="group-hover:text-white transition-colors text-sm sm:text-base">+233 242 624 925</span>
                </li>
                <li className="flex items-center space-x-3 text-white/80 group">
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:text-white/100 transition-colors" />
                  <span className="group-hover:text-white transition-colors text-sm sm:text-base break-all">ketiwaenterprise@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div className="footer-reveal">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white/90">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/1EyLLJy8k5/?mibextid=wwXIfr"
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.instagram.com/ketiwaenterprise?igsh=MW4zY2N5bHdmZGp5eg%3D%3D&utm_source=qr"
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1B5E20] text-white py-3 sm:py-4 text-center text-xs sm:text-sm">
        <p className="text-white/80">Copyright ©2025 Ketiwa Enterprise. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;