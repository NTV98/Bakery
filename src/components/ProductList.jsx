import React, { useState, useEffect } from 'react';
import ProductCard from './common/ProductCard';
import Pagination from './common/Pagination';
import { getProductsPage, categories } from '../data/products';

const ProductList = ({ category = 'all' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState({
    products: [],
    currentPage: 1,
    totalPages: 1,
    totalItems: 0
  });
  const [selectedCategory, setSelectedCategory] = useState(category);

  useEffect(() => {
    // Reset to first page when category changes
    setCurrentPage(1);
    setSelectedCategory(category);
  }, [category]);

  useEffect(() => {
    // Get paginated data
    const data = getProductsPage(currentPage);
    
    // Filter by category if needed
    if (selectedCategory !== 'all') {
      const filteredProducts = data.products.filter(p => p.category === selectedCategory);
      setPaginatedData({
        ...data,
        products: filteredProducts,
        // Recalculate total pages based on filtered products
        totalPages: Math.ceil(filteredProducts.length / 12)
      });
    } else {
      setPaginatedData(data);
    }
  }, [currentPage, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category selection */}
      <div className="flex overflow-x-auto pb-4 mb-6 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedData.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show message when no products match the filter */}
      {paginatedData.products.length === 0 && (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium text-gray-900">No products found</h3>
          <p className="mt-2 text-gray-500">Please try another category or check back later.</p>
        </div>
      )}

      {/* Pagination controls */}
      {paginatedData.totalPages > 1 && (
        <Pagination
          currentPage={paginatedData.currentPage}
          totalPages={paginatedData.totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* Products count */}
      <div className="mt-4 text-center text-sm text-gray-500">
        Showing {paginatedData.products.length} of {paginatedData.totalItems} products
      </div>
    </div>
  );
};

export default ProductList;
