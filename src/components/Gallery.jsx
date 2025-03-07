import React, { useState, useEffect } from "react";
import { galleryImages } from "../developmentContent/constants";
import { FaImages } from "react-icons/fa";

const Gallery = ({ images = [] }) => {
  // Ensure images array is always defined
  const [galleryImagesState, setGalleryImagesState] = useState([]);

  useEffect(() => {
    if (images.length > 0) {
      setGalleryImagesState(images);
    } else {
      setGalleryImagesState(galleryImages);
    }
  }, [images]);

  return (
    <section id="gallery" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
          <FaImages className="inline-block mr-4 text-green-700" />
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImagesState.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
            >
              <img
                src={image}
                alt={`Cuisine ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {
                    ["Seasonal Harvest", "Artisan Breads", "Local Vintages"][
                      index % 3
                    ]
                  }
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {
                    [
                      "Daily-picked ingredients from our organic gardens.",
                      "Handcrafted breads baked fresh each morning.",
                      "Curated selection of local wines and spirits.",
                    ][index % 3]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
