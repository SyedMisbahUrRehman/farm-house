import React from 'react';

export default function Hero({ heroImage }) {
    return (
      <section id="home" className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          loading="lazy"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-shadow">
              HAH Farmhouse
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 text-shadow">
              The perfect destination for picnics, celebrations, weddings, and
              unforgettable fun-filled events amidst nature’s beauty!
            </p>
            <button
              className="bg-green-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-green-700 transition-colors"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About us
            </button>
          </div>
        </div>
      </section>
    );
}
