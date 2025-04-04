import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  // Use navigate for smoother transitions
  const navigate = useNavigate();
  
  // Improved navigation function to prevent flickering
  const handleNavigation = (e, path) => {
    e.preventDefault(); // Prevent default link behavior
    
    // If we're already on the same page, just scroll to top
    if (window.location.pathname === path || 
       (path.includes('?') && window.location.pathname === path.split('?')[0])) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // For different pages, first scroll to top, then navigate
      window.scrollTo(0, 0);
      navigate(path);
    }
  };

  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Sweet Delights</h3>
            <p className="text-gray-300 mb-4">
              Crafting delicious memories since 2005. Our passion is creating the perfect cake for your special moments.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-primary transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-primary transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-primary transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://pinterest.com" className="text-gray-300 hover:text-primary transition">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition" 
                      onClick={(e) => handleNavigation(e, '/')}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition" 
                      onClick={(e) => handleNavigation(e, '/about')}>About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition" 
                      onClick={(e) => handleNavigation(e, '/products')}>Our Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition" 
                      onClick={(e) => handleNavigation(e, '/contact')}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-serif mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=birthday" className="text-gray-300 hover:text-primary transition" 
                      onClick={(e) => handleNavigation(e, '/products?category=birthday')}>Birthday Cakes</Link>
              </li>
              <li>
                <Link to="/products?category=wedding" className="text-gray-300 hover:text-primary transition" 
                      onClick={(e) => handleNavigation(e, '/products?category=wedding')}>Wedding Cakes</Link>
              </li>
              <li>
                <Link to="/products?category=custom" className="text-gray-300 hover:text-primary transition" 
                      onClick={(e) => handleNavigation(e, '/products?category=custom')}>Custom Cakes</Link>
              </li>
              <li>
                <Link to="/products?category=pastries" className="text-gray-300 hover:text-primary transition" 
                      onClick={(e) => handleNavigation(e, '/products?category=pastries')}>Pastries</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <span className="text-gray-300">123 Cake Street, Bakery Town, BK 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <span className="text-gray-300">info@sweetdelights.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
