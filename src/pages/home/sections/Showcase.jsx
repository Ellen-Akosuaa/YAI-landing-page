import React from "react";
import { ShoppingCart } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      image: "/images/ginger-1432262_1280.webp",
      title: "Ginger Powder",
      description: "Our signature organic ginger powder, sourced from the finest farms. Perfect for both culinary and wellness purposes.",
      link: "https://paystack.com/buy/ginger-powder-oknkqd"
    },
    {
      image: "/images/w.webp",
      title: "Prekese Powder",
      description: "Premium prekese made into powder to add to your meals for an intense aroma and flavor.",
      link: "https://paystack.com/buy/prekese-powder-hgbutn"
    },
    {
      image: "/images/turmeric-3089308_1280.webp",
      title: "Turkey Berries Powder",
      description: "A curated selection of our finest turkey berries(kwansusua) made into a powder form. Perfect for cooking.",
      link: "https://paystack.com/buy/turkey-berries-powder-tbscqj"
    },
    {
      image: "/images/tee-1740871_1280.webp",
      title: "Ginger Tea Bags",
      description: "Our signature organic ginger, sourced from the finest farms made into tea bags. Perfect for wellness purposes.",
      link: "https://paystack.com/buy/ginger-tea-bags-rzweqt"
    },
    {
      image: "/images/tea-5037947_1280.webp",
      title: "Prekese Tea Bags",
      description: "Premium prekese made into tea bags for an intense aroma and flavor filled tea.",
      link: "https://paystack.com/buy/prekese-tea-bags-bnrukp"
    },
    {
      image: "/images/tee-5183448_1280.webp",
      title: "Turkey Berry Tea Bags",
      description: "A curated selection of our finest turkey berries(kwansusua) made into a tea bags for a healthy tea.",
      link: "https://paystack.com/buy/turkey-berry-tea-bags-tdclhd"
    }
  ];

  return (
    <section id="showcase" className="py-16 bg-gray-50" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        <h2 id="products-heading" className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Shop Our Products
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay with Description */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-center">
                    {product.description}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {product.title}
                </h3>
                <a 
                  href={product.link}
                  className="w-full bg-[#1e3a8a] text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#152b67] transition-all duration-300 transform hover:scale-105"
                  aria-label={`Shop now for ${product.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                  <span>Shop Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;