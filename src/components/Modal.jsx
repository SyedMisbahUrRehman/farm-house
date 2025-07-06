import React from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { galleryTitles, galleryDescriptions } from '../developmentContent/constants';

const Modal = ({ isOpen, onClose, images, currentIndex, onNext, onPrevious }) => {
    if (!isOpen) return null;

    // Safety checks
    if (!images || images.length === 0) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-xl font-semibold text-green-800">Gallery</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <FaTimes size={24} />
                        </button>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-600">No images available.</p>
                    </div>
                </div>
            </div>
        );
    }

    const currentImage = images[currentIndex];
    const safeIndex = Math.min(currentIndex, images.length - 1);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-xl font-semibold text-green-800">
                        {galleryTitles[safeIndex] || `Gallery Image ${safeIndex + 1}`}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Image Container */}
                <div className="relative">
                    <img
                        src={currentImage}
                        alt={`Gallery ${safeIndex + 1}`}
                        className="w-full h-96 md:h-[500px] object-cover"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/800x500/4ade80/ffffff?text=Gallery+Image";
                        }}
                    />

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={onPrevious}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                            >
                                <FaChevronLeft size={20} className="text-green-800" />
                            </button>
                            <button
                                onClick={onNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                            >
                                <FaChevronRight size={20} className="text-green-800" />
                            </button>
                        </>
                    )}
                </div>

                {/* Description */}
                <div className="p-6">
                    <p className="text-gray-600 text-sm md:text-base">
                        {galleryDescriptions[safeIndex] || "Beautiful farm house scenery and experiences."}
                    </p>

                    {/* Image Counter */}
                    <div className="mt-4 text-center text-sm text-gray-500">
                        {safeIndex + 1} of {images.length}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal; 