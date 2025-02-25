import React from "react";
import { ShoppingCart } from 'lucide-react';

const Showcase = () => {
  const products = [
    {
      image: "/images/ginger-1432262_1280.jpg",
      title: "Premium Ginger Powder",
      description: "Our signature organic ginger powder, sourced from the finest farms. Perfect for both culinary and wellness purposes."
    },
    {
      image: "/images/tea-5037947_1280.jpg",
      title: "Prekese Tea Bags",
      description: "Premium prekese made into powder to add to your meals for an intense aroma and flavor."
    },
    {
      image: "/images/spices-370114_1280.jpg",
      title: "Turkey Berries Powder",
      description: "A curated selection of our finest turkey berries(kwansusua) made into a powder form. Perfect for cooking and teas as well."
    }
  ];

  return (
    <section id="showcase" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">
          Shop Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay with Description */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <button className="w-full bg-[#1e3a8a] text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#152b67] transition-colors duration-300">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
