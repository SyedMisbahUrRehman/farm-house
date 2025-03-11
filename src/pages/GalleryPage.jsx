import React from "react";
import { galleryImages } from "../developmentContent/constants";
import Card from "../components/Card";
import { FaImages } from "react-icons/fa";
import Footer from "../components/Footer";

const GalleryPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Main Content */}
      <main className="flex-grow">
        <section id="gallery" className="pb-10">
          <div className="container mx-auto px-4">
            {/* Gallery Header */}
            <div className="text-center mb-4 mt-20">
              <h1 className="text-4xl font-bold text-green-900 flex justify-center items-center gap-2">
                <FaImages className="text-green-800" /> Our Gallery
              </h1>
              <p className="text-gray-600 mt-2 mb-4 max-w-lg mx-auto">
                Explore our collection of beautiful moments and places.
              </p>
            </div>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  image={image}
                  title={`Gallery Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-green-900 text-white w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default GalleryPage;
