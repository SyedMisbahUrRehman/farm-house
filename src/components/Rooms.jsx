import React from 'react'
import { FaHome } from 'react-icons/fa'

export default function Rooms({ roomImages }) {
    return (
        <section id="rooms" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
                    <FaHome className="inline-block mr-4 text-green-700" />
                    Accommodations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roomImages.map((image, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
                        >
                            <img
                                src={image}
                                alt={`Room ${index + 1}`}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                    {['Willow Suite', 'Meadow Room', 'Orchard Retreat'][index]}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm md:text-base">
                                    {[
                                        'Expansive suite with panoramic countryside views.',
                                        'Intimate room overlooking our lavender fields.',
                                        'Secluded space nestled among our fruit orchards.'
                                    ][index]}
                                </p>
                                <button className="text-green-700 hover:text-green-900 transition-colors text-sm md:text-base">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}
