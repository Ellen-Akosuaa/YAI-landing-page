import React from "react";

const AboutInnovator = () => {
  return (
    <div id="ceo" className="min-h-screen bg-gradient-to-br from-blue-40 via-blue-40 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/images/ceo.jpg"
                alt="CEO Felicia Serwaa"
                className="relative z-10 w-full h-[600px] object-cover rounded-lg shadow-xl"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-[#1e3a8a]">Meet Our CEO</h1>
            <h2 className="text-2xl font-semibold text-[#152b67]">Felicia Serwaa</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-gray-700">
                Ketiwa Enterprise was founded by Felicia Serwaa, a determined entrepreneur, 
                a physically challenged individual, and a single mother with a disability. 
                With a deep passion for self-reliance and empowerment, she established the 
                business to prove that limitations do not define one's potential. Through 
                Ketiwa Enterprise, she is championing the "We Can Do" spirit, inspiring 
                others to embrace resilience and independence.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Felicia's vision goes beyond just producing natural spices and herbal remedies. 
                She is committed to creating employment opportunities for single mothers with 
                disabilities, helping them gain financial independence and dignity. By working 
                with local farmers, she also ensures that raw materials such as Prekese, Turkey 
                Berries, and Ginger are not wasted but transformed into high-quality, affordable 
                products that benefit both consumers and producers.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                With a goal to employ 50 persons with disabilities, especially youth and single 
                mothers, Felicia continues to break barriers and pave the way for a more inclusive 
                and self-sufficient community.
              </p>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a8a]">50+</div>
                <div className="text-sm text-gray-600">Future Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a8a]">100%</div>
                <div className="text-sm text-gray-600">Natural Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a8a]">Local</div>
                <div className="text-sm text-gray-600">Sourcing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
  
}
export default AboutInnovator;
