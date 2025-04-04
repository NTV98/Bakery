import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart, CartContext } from '../../context/CartContext';
import { useTheme, ThemeContext } from '../../context/ThemeContext';
import { initializeNavIndicators } from './NavbarEffects';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Use direct context consumption as a fallback
  const cartContext = React.useContext(CartContext);
  const themeContext = React.useContext(ThemeContext);
  
  // Get cart items safely
  const totalItems = cartContext ? cartContext.totalItems || 0 : 0;
  const isDarkMode = themeContext ? themeContext.isDarkMode : false;
  
  // Function to scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Initialize indicator positions after component mount and when route changes
    initializeNavIndicators();
    
    // Scroll to top when route changes
    scrollToTop();
    
    // Also attach to route change events
    const handleRouteChange = () => {
      setTimeout(initializeNavIndicators, 50); // Small delay to ensure DOM is updated
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/Bakery/home' },
    { name: 'Products', path: '/Bakery/products' },
    { name: 'About', path: '/Bakery/about' },
    { name: 'Contact', path: '/Bakery/contact' },
  ];

  // Pre-calculate the active nav item for better indicator positioning
  const activeNavItem = navItems.find(item => item.path === location.pathname);

  return (
    <nav className={`bg-white shadow-md ${isDarkMode ? 'dark:bg-gray-800 dark:shadow-gray-700/10' : ''} transition-colors duration-300`}>
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">
            Sweet Delights
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 relative">
              <div className="absolute bottom-0 h-0.5 bg-primary transition-all duration-500 ease-in-out" 
                   id="indicator"></div>
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-medium relative py-1 nav-link active"
                        : `text-dark ${isDarkMode ? 'dark:text-gray-200' : ''} hover:text-primary ${isDarkMode ? 'dark:hover:text-primary' : ''} transition py-1 nav-link`
                    }
                    onClick={(e) => {
                      const indicator = document.getElementById('indicator');
                      if (indicator) {
                        indicator.style.width = `${e.currentTarget.offsetWidth}px`;
                        indicator.style.left = `${e.currentTarget.offsetLeft}px`;
                      }
                      scrollToTop();
                    }}
                  >
                    {item.name}
                    {item.path === location.pathname && 
                      <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-transparent"></span>
                    }
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <ThemeToggle />
            
            <Link to="/cart" className="relative">
              <FaShoppingCart className={`text-2xl text-dark ${isDarkMode ? 'dark:text-gray-200' : ''} hover:text-primary ${isDarkMode ? 'dark:hover:text-primary' : ''} transition`} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className={`text-2xl ${isDarkMode ? 'dark:text-gray-200' : ''}`} />
              ) : (
                <FaBars className={`text-2xl ${isDarkMode ? 'dark:text-gray-200' : ''}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3 relative">
              <div className="absolute left-0 w-1 bg-primary transition-all duration-500 ease-in-out" 
                   id="mobile-indicator"></div>
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-medium block pl-3 mobile-nav-link active"
                        : `text-dark ${isDarkMode ? 'dark:text-gray-200' : ''} hover:text-primary ${isDarkMode ? 'dark:hover:text-primary' : ''} transition block pl-3 mobile-nav-link`
                    }
                    onClick={(e) => {
                      setIsOpen(false);
                      const indicator = document.getElementById('mobile-indicator');
                      if (indicator) {
                        indicator.style.height = `${e.currentTarget.offsetHeight}px`;
                        indicator.style.top = `${e.currentTarget.offsetTop}px`;
                      }
                      scrollToTop();
                    }}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/cart" className={`flex items-center pl-3 text-dark ${isDarkMode ? 'dark:text-gray-200' : ''} hover:text-primary ${isDarkMode ? 'dark:hover:text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  <FaShoppingCart className="mr-2" />
                  Cart ({totalItems})
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          display: inline-block;
          transition: color 0.3s ease;
        }
        .mobile-nav-link {
          transition: color 0.3s ease;
        }
        .mobile-nav-link:hover {
          padding-left: 1.25rem;
        }
        #indicator {
          width: 0;
          left: 0;
          transition: left 0.5s ease, width 0.5s ease;
        }
        #mobile-indicator {
          height: 0;
          top: 0;
          transition: top 0.5s ease, height 0.5s ease;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
