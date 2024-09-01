import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        "https://crudcrud.com/api/1856563a86f14a328671194a5e701ed1/cart"
      );
      console.log(res.data);
      setCartItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (item) => {
    const existing = cartItems.find((listItem) => listItem.id === item.id);
    try {
      if (existing) {
        const { _id, ...cartItem } = existing;
        await axios.put(
          `https://crudcrud.com/api/1856563a86f14a328671194a5e701ed1/cart/${_id}`,
          { ...cartItem, Quantity: cartItem.Quantity + 1 }
        );
      } else {
        const { _id, ...cartItem } = item;
        await axios.post(
          "https://crudcrud.com/api/1856563a86f14a328671194a5e701ed1/cart",
          { ...cartItem, Quantity: 1 }
        );
      }
      fetchCart();
    } catch (error) {
      console.log(error);
    }
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
