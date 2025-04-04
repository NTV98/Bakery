import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme, ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  // Use a try-catch to handle potential errors with useTheme
  try {
    // Directly use the context with useContext as a fallback approach
    const context = React.useContext(ThemeContext);
    
    if (!context) {
      console.error("ThemeContext not available. Check if ThemeProvider is properly set up.");
      return null;
    }
    
    const { isDarkMode, toggleTheme } = context;

    return (
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-gray-600 text-xl" />
        )}
      </button>
    );
  } catch (error) {
    console.error("Error in ThemeToggle:", error);
    return null;
  }
};

export default ThemeToggle;
