import React from 'react'
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-green-900 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Willow Creek Farmhouse</h3>
                    <div className="flex items-center justify-center sm:justify-start">
                        <FaMapMarkerAlt className="mr-2" />
                        <p className="text-sm sm:text-base">123 Farmstead Lane, Rural Valley, USA</p>
                    </div>
                </div>
                <div className="flex space-x-4 text-xl sm:text-2xl">
                    <a href="https://instagram.com/" className="hover:text-green-300 transition-colors"><FaInstagram /></a>
                    <a href="https://facebook.com/" className="hover:text-green-300 transition-colors"><FaFacebook /></a>
                    <a href="https://x.com/" className="hover:text-green-300 transition-colors"><FaSquareXTwitter /></a>
                </div>
            </div>
            <div className=" mx-auto px-4 pt-8  text-center text-sm text-white/80">
                <p>© {currentYear} All Rights Reserved. Developed by <a href="https://nediantechnologies.com" className="underline hover:text-white transition-colors text-nowrap">Nedian Technologies</a></p>
            </div>
        </footer>
    )
}