import React, { createContext, useState } from "react";

import { productData } from "../static/data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < productData.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};
const getDefaultWish = () => {
  let wish = {};
  for (let i = 1; i < productData.length + 1; i++) {
    wish[i] = 0;
  }

  return wish;
};

export default function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlist, setWishlist] = useState(getDefaultWish());

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productData.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const handleAddToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    updateItemCount,
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    getTotalAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
