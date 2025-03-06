import React from 'react'

export default function About({ aboutImage }) {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Our Heritage</h2>
                    <p className="text-base md:text-lg mb-6 leading-relaxed">
                        Nestled in the rolling countryside, Willow Creek Farmhouse is more than a destination—it's a living narrative of pastoral tranquility and refined simplicity.
                    </p>
                    <p className="text-base md:text-lg mb-6 leading-relaxed">
                        Our carefully restored farmhouse blends historical authenticity with modern luxury, offering an immersive experience that connects you with the rhythms of rural life.
                    </p>
                    <div className="flex space-x-6">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-700">1892</div>
                            <div className="text-xs sm:text-sm uppercase tracking-wide">Established</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-700">35</div>
                            <div className="text-xs sm:text-sm uppercase tracking-wide">Acres</div>
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
    )
}
