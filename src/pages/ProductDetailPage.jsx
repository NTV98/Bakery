import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate fetching data
    setIsLoading(true);
    const productId = parseInt(id);
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct);
    setIsLoading(false);
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // Optional: Add some feedback that the item was added
      alert(`Added ${quantity} ${product.name} to your cart!`);
    }
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-star-${i}`} className="text-yellow-400" />);
    }
    
    return stars;
  };

  if (isLoading) {
    return (
      <div className="container-custom py-16 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-light py-12">
      <div className="container-custom">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary transition">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </div>

        {/* Product Main Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image || "https://via.placeholder.com/600x400"}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-600">
                ({product.rating}) · {product.reviews.length} {product.reviews.length === 1 ? 'Review' : 'Reviews'}
              </span>
            </div>
            
            {/* Price */}
            <div className="text-2xl font-semibold text-primary mb-4">
              ${product.price.toFixed(2)}
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Description:</h3>
              <p className="text-gray-600">
                {product.description}
              </p>
            </div>
            
            {/* Category */}
            <div className="mb-6">
              <span className="text-gray-600">Category: </span>
              <Link
                to={`/products?category=${product.category}`}
                className="text-primary hover:underline"
              >
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Cakes
              </Link>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <div className="w-32">
                <label htmlFor="quantity" className="block text-gray-700 mb-1">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <button
                onClick={handleAddToCart}
                className="btn btn-primary py-3 px-6"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold mb-6 pb-2 border-b border-gray-200">
            Customer Reviews ({product.reviews.length})
          </h2>
          
          {product.reviews.length > 0 ? (
            <div className="space-y-6">
              {product.reviews.map(review => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {review.user.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.user}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="card">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <div className="aspect-w-1 aspect-h-1">
                      <img 
                        src={relatedProduct.image || "https://via.placeholder.com/300"}
                        alt={relatedProduct.name}
                        className="object-cover w-full h-64"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2">{relatedProduct.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-primary">${relatedProduct.price.toFixed(2)}</span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
