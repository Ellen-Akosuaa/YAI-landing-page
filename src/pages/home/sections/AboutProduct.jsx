import React from "react";
import { SparklesIcon, HeartIcon, GlobeAltIcon } from "@heroicons/react/24/outline";


const AboutProduct = () => {
  return (
    <section id="about" className="bg-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-[#2E7D32] mb-12">
        About Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Natural & Pure Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-blue-100">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-50 rounded-full">
              <SparklesIcon className="w-12 h-12 text-green-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#1B5E20] text-center mb-4">
            100% Natural & Pure
          </h3>
          <p className="text-gray-600 text-center">
            Our spices and teas are carefully sourced and processed without additives, ensuring you get the best of nature's goodness.
          </p>
        </div>

        {/* Nutrient-Rich Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-blue-100">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-50 rounded-full">
              <HeartIcon className="w-12 h-12 text-yellow-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#1B5E20] text-center mb-4">
            Nutrient-Rich & Health-Boosting
          </h3>
          <p className="text-gray-600 text-center">
            Our spices and teas are packed with essential vitamins and minerals to support overall well-being and vitality.
          </p>
        </div>

        {/* Ethically Sourced Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-blue-100">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-50 rounded-full">
              <GlobeAltIcon className="w-12 h-12 text-green-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#1B5E20] text-center mb-4">
            Ethically Sourced & Community-Driven
          </h3>
          <p className="text-gray-600 text-center">
            We partner with local farmers and empower small-scale producers, ensuring sustainability and fair opportunities.
          </p>
        </div>
      </div>
    </div>
  </section>
);
}

export default AboutProduct;
