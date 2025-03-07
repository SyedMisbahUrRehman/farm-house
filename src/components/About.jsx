import React from 'react'

export default function About({ aboutImage }) {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
              Our Services
            </h2>
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              HAH farmhouse is a wonderful place where you can enjoy your
              favorite leisure activities and celebrations. Whether it's a
              picnic, birthday party, wedding, or any special event, we provide
              the perfect setting for your gatherings.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our farmhouse offers a gaming area, swimming pool, 3 comfortable
              rooms, a modern kitchen, exciting rides, a bonfire, and much more
              to make every moment unforgettable. <br/>
            For a perfect outing with family and friends, choose our Farmhouse and create joyful memories to cherish forever!
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700">
                  2024
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">
                  Established
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700">
                  35
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">
                  Acres
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={aboutImage}
              alt="Willow Creek Farmhouse"
              className="rounded-lg shadow-xl object-cover w-full h-auto md:h-[500px]"
            />
          </div>
        </div>
      </section>
    );
}
