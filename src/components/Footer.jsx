import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <section className="contact">
      <div className="bg-[#00A859] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Quick Links */}
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-[#ff9f00] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#ff9f00] transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-[#ff9f00] transition-colors">Our Services</a></li>
                <li><a href="#mission" className="hover:text-[#ff9f00] transition-colors">Our Mission</a></li>
                <li><a href="#privacy" className="hover:text-[#ff9f00] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-white">
                Contact Info
              </h4>
              <ul className="space-y-2">
                <li>Honneycole R28</li>
                <li>Amamoma, CapeCoast</li>
                <li>+233 249 107 812</li>
                <li>info@ketiwaent.com</li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-white">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://web.facebook.com/profile.php?id=61569947372606"
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/AgriVisionAI"
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/agrivisionai/"
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/agrovision-ai-app"
                  className="hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1f1f1f] text-white py-3 text-center text-sm">
        <p>Copyright ©2024 All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;