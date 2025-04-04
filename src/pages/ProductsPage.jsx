import React from 'react';
import ProductListing from '../components/products/ProductListing';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center text-gray-800">Our Cake Collection</h1>
          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our delicious selection of handcrafted cakes for every occasion. 
            From birthdays to weddings, we have the perfect cake for your celebration.
          </p>
        </div>
      </div>
      
      <ProductListing />
    </div>
  );
};

export default ProductsPage;
