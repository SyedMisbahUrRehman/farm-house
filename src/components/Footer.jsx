import React from 'react'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white py-12">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Willow Creek Farmhouse</h3>
                    <div className="flex items-center justify-center sm:justify-start">
                        <FaMapMarkerAlt className="mr-2" />
                        <p className="text-sm sm:text-base">123 Farmstead Lane, Rural Valley, USA</p>
                    </div>
                </div>
                <div className="flex space-x-6 text-xl sm:text-2xl">
                    <a href="https://instagram.com/" className="hover:text-green-300 transition-colors"><FaInstagram /></a>
                    <a href="https://facebook.com/" className="hover:text-green-300 transition-colors"><FaFacebook /></a>
                    <a href="https://x.com/" className="hover:text-green-300 transition-colors"><FaTwitter /></a>
                </div>
            </div>
        </footer>)
}
