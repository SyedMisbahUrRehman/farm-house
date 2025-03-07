import React, { useEffect, useState } from 'react';
import { FaLeaf, FaArrowUp, FaBars, FaTimes } from 'react-icons/fa';
import { Hero, About, Rooms, Cuisine, Contact, Footer, Gallery } from './components';
import { heroImage, aboutImage, roomImages, cuisineImages, navLinks } from './developmentContent/constants';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300 && scrollY + innerHeight < document.body.scrollHeight - 160);

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
          <div className="hidden md:block space-x-6">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`capitalize hover:text-green-700 transition-colors ${activeSection === id ? "text-green-800 font-semibold" : ""
                  }`}
              >
                {label}
              </button>
            ))}
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
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero heroImage={heroImage} />

      {/* About Section */}
      <About aboutImage={aboutImage} />

      {/* Rooms Section */}
      <Rooms roomImages={roomImages} />

      {/* Cuisine Section */}
      <Cuisine cuisineImages={cuisineImages} />

      {/* Contact Section */}
      <Contact />

      {/* Gallery Section */}
      <Gallery />

      {/* Move to Top Button */}
      {showTopButton && (
        <button
          className="fixed bottom-6 right-6 bg-green-900 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp />
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;