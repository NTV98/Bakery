import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Export the context directly
export const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += action.payload.quantity || 1;
        return updatedCart;
      } else {
        return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }
    
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    
    case 'UPDATE_QUANTITY':
      return state.map(item => 
        item.id === action.payload.id 
          ? { ...item, quantity: action.payload.quantity } 
          : item
      );
    
    case 'CLEAR_CART':
      return [];
      
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(
    cartReducer, 
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { ...product, quantity } 
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ 
      type: 'REMOVE_FROM_CART', 
      payload: productId 
    });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Improved useCart hook with error handling
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined || context === null) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
