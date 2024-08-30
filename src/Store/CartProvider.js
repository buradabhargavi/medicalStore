import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

const apiUrl = "https://crudcrud.com/api/1c5ec1a73dab484d97131d752f4459c2/cart";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    console.log(item);
  };
  const contextVal = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextVal}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
