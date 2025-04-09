import React, { createContext, useContext, useState } from 'react';
import eng from './eng.json';
import vi from './vi.json';

const translations = { eng, vi };

// Create a context for language
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to English
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage === 'eng' || storedLanguage === 'vi') ? storedLanguage : 'eng';
  });

  // Function to switch language
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  // Translation function
  const t = (key, variables = {}) => {
    // Split the key by dots to navigate nested objects
    const keys = key.split('.');
    
    // Navigate through the translation object to find the value
    let translatedText = keys.reduce((obj, k) => 
      (obj && obj[k] !== undefined) ? obj[k] : undefined, 
      translations[language]
    );
    
    // If translation not found, return the key
    if (translatedText === undefined) return key;
    
    // Replace variables if any
    if (variables && typeof translatedText === 'string') {
      Object.keys(variables).forEach(varKey => {
        translatedText = translatedText.replace(`\${${varKey}}`, variables[varKey]);
      });
    }
    
    return translatedText;
  };

  // The value that will be available to consumers of this context
  const contextValue = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for consuming the language context
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
