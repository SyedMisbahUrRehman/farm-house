import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
        {/* <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p> */}
        
      </div>
    </div>
  );
};

export default Card;
