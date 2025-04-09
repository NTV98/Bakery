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
      <div className="py-16 bg-white min-h-screen">
        <div className="container-custom">
          <div className="text-center max-w-lg mx-auto">
            <h1 className="text-3xl font-serif font-bold mb-6 dark:text-white">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8 dark:text-gray-300">
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
    <div className="py-16 bg-white min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-bold mb-8 dark:text-white">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-900">
                      <th className="text-left py-4 px-6 dark:text-white">Product</th>
                      <th className="text-center py-4 px-6 dark:text-white">Price</th>
                      <th className="text-center py-4 px-6 dark:text-white">Quantity</th>
                      <th className="text-center py-4 px-6 dark:text-white">Total</th>
                      <th className="text-center py-4 px-6 dark:text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} className="border-b border-gray-200 dark:border-gray-600">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                          <img src={`${process.env.PUBLIC_URL}${item.image}`|| "https://via.placeholder.com/80"}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded mr-4" 
                            />
                            <div>
                              <h3 className="font-medium dark:text-white">{item.name}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-300 hidden md:block">
                                {item.description.substring(0, 60)}...
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center dark:text-white">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex justify-center">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                              className="w-16 p-1 text-center border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
                            />
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center font-medium dark:text-white">
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

              <div className="p-6 border-t border-gray-200 dark:border-gray-600 flex flex-wrap justify-between">
                <button 
                  onClick={clearCart}
                  className="text-sm text-gray-600 hover:text-primary transition dark:text-gray-300"
                >
                  Clear Cart
                </button>
                <Link to="/products" className="text-sm text-gray-600 hover:text-primary transition dark:text-gray-300">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-serif font-semibold mb-4 dark:text-white">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="font-medium dark:text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="font-medium dark:text-white">$0.00</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold dark:text-white">Total</span>
                    <span className="text-lg font-semibold text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">Including VAT</p>
                </div>
              </div>
              
              <button className="w-full btn btn-primary py-3 mt-6">
                Proceed to Checkout
              </button>

              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-2 dark:text-white">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
              
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
