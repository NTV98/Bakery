import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, parseInt(newQuantity));
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center max-w-lg mx-auto">
            <h1 className="text-3xl font-serif font-bold mb-6">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
              Browse our delicious cakes and pastries to get started!
            </p>
            <Link to="/products" className="btn btn-primary px-8 py-3">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-light">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-4 px-6">Product</th>
                      <th className="text-center py-4 px-6">Price</th>
                      <th className="text-center py-4 px-6">Quantity</th>
                      <th className="text-center py-4 px-6">Total</th>
                      <th className="text-center py-4 px-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <img 
                              src={item.image || "https://via.placeholder.com/80"} 
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded mr-4" 
                            />
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-500 hidden md:block">
                                {item.description.substring(0, 60)}...
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex justify-center">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                              className="w-16 p-1 text-center border border-gray-300 rounded"
                            />
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition"
                            aria-label="Remove item"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 border-t border-gray-200 flex flex-wrap justify-between">
                <button 
                  onClick={clearCart}
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Clear Cart
                </button>
                <Link to="/products" className="text-sm text-gray-600 hover:text-primary transition">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-serif font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Including VAT</p>
                </div>
              </div>
              
              <button className="w-full btn btn-primary py-3 mt-6">
                Proceed to Checkout
              </button>

              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-2">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
