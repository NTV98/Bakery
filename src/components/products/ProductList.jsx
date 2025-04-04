import React, { useState, useEffect } from 'react';
import ProductCard from '../common/ProductCard';

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev < totalPages ? prev + 1 : prev);
  const prevPage = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev);

  // Reset to first page when products change
  useEffect(() => {
    setCurrentPage(1);
  }, [products.length]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 items-center">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-l-md ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
          >
            Previous
          </button>
          
          <div className="flex">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border-t border-b ${
                  currentPage === index + 1
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-r-md ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
          >
            Next
          </button>
        </div>
      )}
      
      <div className="text-center mt-4 text-gray-500">
        Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} products
      </div>
    </div>
  );
};

export default ProductList;
