import React from "react";

const AboutInnovator = () => {
  return (
    <div id="ceo" className="min-h-screen bg-gradient-to-br from-#2E7D32-40 via-#2E7D32-40 to-#2E7D32-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-30">

          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/images/Picture12.jpg"
                alt="CEO Felicia Serwaa"
                className="relative z-10 w-full h-[700px] object-cover rounded-lg shadow-xl"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-[#2E7D32]">Meet Our CEO</h1>
            <h2 className="text-2xl font-semibold text-[#1B5E20]">Felicia Serwaa</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-gray-700">
                Ketiwa Enterprise was founded by Felicia Serwaa, a determined entrepreneur
                and a single mother with a disability. 
                With a deep passion for self-reliance and empowerment, she established the 
                business to prove that limitations do not define one's potential.
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
                <div className="text-3xl font-bold text-[#2E7D32]">50+</div>
                <div className="text-sm text-gray-600">Future Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2E7D32]">100%</div>
                <div className="text-sm text-gray-600">Natural Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2E7D32]">Local</div>
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
