import React, { useEffect, useState } from "react";
import { FaLeaf, FaArrowUp, FaBars, FaTimes, FaTimes as FaClose } from "react-icons/fa";
import {
  Hero,
  About,
  Rooms,
  Cuisine,
  Contact,
  Footer,
} from "./components";
import {
  heroImage,
  aboutImage,
  roomImages,
  cuisineImages,
  navLinks,
} from "./developmentContent/constants";

const App = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(
        window.scrollY > 300 &&
        scrollY + innerHeight < document.body.scrollHeight - 160
      );

      let currentSection = "home";
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentSection = link.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set active section on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const openGalleryModal = () => {
    setIsGalleryModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-800 flex items-center">
            <FaLeaf className="mr-2" />
            <span className="hidden sm:inline">HAH Farmhouse</span>
            <span className="sm:hidden">HAHF</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className={`capitalize hover:text-green-800 transition-colors ${activeSection === "home" ? "text-green-800 font-semibold" : ""
                }`}
            >
              Home
            </button>
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`capitalize hover:text-green-800 transition-colors ${activeSection === id ? "text-green-800 font-semibold" : ""
                  }`}
              >
                {label}
              </button>
            ))}

            {/* Gallery Modal Button */}
            <button
              onClick={openGalleryModal}
              className={`capitalize hover:text-green-800 transition-colors ${activeSection === "gallery"
                  ? "text-green-800 font-semibold"
                  : ""
                }`}
            >
              Gallery
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-800 text-2xl"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection("home")}
              className={`block w-full text-left px-4 py-3 capitalize hover:bg-green-50 ${activeSection === "home" ? "text-green-800 font-semibold" : ""
                }`}
            >
              Home
            </button>
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-4 py-3 capitalize hover:bg-green-50 ${activeSection === id ? "text-green-800 font-semibold" : ""
                  }`}
              >
                {label}
              </button>
            ))}
            {/* Gallery Modal Button for Mobile */}
            <button
              onClick={openGalleryModal}
              className="block w-full text-left px-4 py-3 capitalize hover:bg-green-50"
            >
              Gallery
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <Hero heroImage={heroImage} />
      <About aboutImage={aboutImage} />
      <Rooms roomImages={roomImages} />
      <Cuisine cuisineImages={cuisineImages} />
      <Contact />
      <Footer />

      {/* Gallery Modal */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-green-900">Gallery</h2>
              <button
                onClick={closeGalleryModal}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                <FaClose />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-center">
                Gallery content will be added here.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Move to Top Button */}
      {showTopButton && (
        <button
          className="fixed bottom-6 right-6 bg-green-900 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;
