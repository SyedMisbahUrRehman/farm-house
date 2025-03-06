import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
                    <FaEnvelope className="inline-block mr-4 text-green-700" />
                    Contact Us
                </h2>
                <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>)
}
