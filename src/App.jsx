import React, { useEffect, useState } from 'react';
import {
  FaLeaf,
  FaHome,
  FaUtensils,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowUp,
  FaBars,
  FaTimes
} from 'react-icons/fa';

// Dummy data for the website
const heroImage = "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const aboutImage = "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const roomImages = [
  "https://images.unsplash.com/photo-1661000902726-ebda7e06a23a?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600917016506-556622b74303?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
const cuisineImages = [
  "https://images.unsplash.com/photo-1506545632994-973468d2bb18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showTopButton, setShowTopButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-serif text-gray-800 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-800 flex items-center">
            <FaLeaf className="mr-2" />
            <span className="hidden sm:inline">Willow Creek Farmhouse</span>
            <span className="sm:hidden">WCF</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block space-x-6">
            {['home', 'about', 'rooms', 'cuisine', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-green-700 transition-colors 
                  ${activeSection === section ? 'text-green-800 font-semibold' : ''}`}
              >
                {section}
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
            {['home', 'about', 'rooms', 'cuisine', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-4 py-3 capitalize hover:bg-green-50 
                  ${activeSection === section ? 'text-green-800 font-semibold' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-shadow">Willow Creek Farmhouse</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 text-shadow">
              Escape to a sanctuary of rustic elegance, where nature's embrace meets timeless comfort
            </p>
            <button
              className="bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-green-800 transition-colors"
              onClick={() => scrollToSection('about')}
            >
              Discover Our Story
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Rooms Section */}
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
      </section>

      {/* Cuisine Section */}
      <section id="cuisine" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
            <FaUtensils className="inline-block mr-4 text-green-700" />
            Farm-to-Table Dining
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisineImages.map((image, index) => (
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
                    {['Seasonal Harvest', 'Artisan Breads', 'Local Vintages'][index]}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {[
                      'Daily-picked ingredients from our organic gardens.',
                      'Handcrafted breads baked fresh each morning.',
                      'Curated selection of local wines and spirits.'
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
      </section>

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
      </footer>
    </div>
  );
};

export default App;