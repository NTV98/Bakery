import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="card transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray-50 hover:shadow-lg">
      <div className="aspect-w-1 aspect-h-1">
        <img 
          src={product.image || "https://via.placeholder.com/300"} 
          alt={product.name}
          className="object-cover w-full h-64"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</span>
          <div className="flex space-x-2">
            <Link 
              to={`/products/${product.id}`}
              className="btn btn-secondary text-sm"
            >
              View Details
            </Link>
            <button 
              onClick={() => addToCart(product)}
              className="btn btn-primary text-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
