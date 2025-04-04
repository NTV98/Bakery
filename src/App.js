import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="Bakery/home" replace />} />
              <Route path="Bakery/home" element={<HomePage />} />
              <Route path="Bakery/about" element={<AboutPage />} />
              <Route path="Bakery/products" element={<ProductsPage />} />
              <Route path="Bakery/products/:id" element={<ProductDetailPage />} />
              <Route path="Bakery/cart" element={<CartPage />} />
              <Route path="Bakery/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
