import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import Pagination from '../common/Pagination';
import { getProductsPage, categories } from '../../data/products';

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productData, setProductData] = useState({
    products: [],
    currentPage: 1,
    totalPages: 1,
    totalItems: 0
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const itemsPerPage = 12;
  
  // Get page from URL or default to 1
  const pageParam = searchParams.get('page');
  const categoryParam = searchParams.get('category');
  
  useEffect(() => {
    // Set initial state from URL params
    const initialPage = pageParam ? parseInt(pageParam) : 1;
    const initialCategory = categoryParam || 'all';
    
    setSelectedCategory(initialCategory);
    fetchProducts(initialPage, initialCategory);
  }, [pageParam, categoryParam]);
  
  const fetchProducts = (page, category) => {
    const result = getProductsPage(page, category);
    setProductData({
      products: result.products,
      currentPage: result.currentPage,
      totalPages: result.totalPages,
      totalItems: result.totalItems
    });
  };
  
  const handlePageChange = (newPage) => {
    // Update URL with new page
    searchParams.set('page', newPage);
    if (selectedCategory !== 'all') {
      searchParams.set('category', selectedCategory);
    }
    setSearchParams(searchParams);
    
    // Update products
    fetchProducts(newPage, selectedCategory);
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
    // Reset to page 1 when changing category
    searchParams.set('page', 1);
    if (category !== 'all') {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
    
    fetchProducts(1, category);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">Our Cakes</h1>
      
      {/* Category filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productData.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* No products message */}
      {productData.products.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-medium text-gray-500">No products found</h3>
          <p className="mt-4 text-gray-400">Try changing your filter criteria</p>
        </div>
      )}
      
      {/* Pagination */}
      {productData.totalPages > 1 && (
        <Pagination
          currentPage={productData.currentPage}
          totalPages={productData.totalPages}
          totalItems={productData.totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
/* Products grid */
export default ProductListing;
