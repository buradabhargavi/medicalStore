import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        "https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/cart"
      );
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
          `https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/cart/${_id}`,
          { ...cartItem, Quantity: cartItem.Quantity + 1 }
        );
      } else {
        const { _id, ...cartItem } = item;
        await axios.post(
          "https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/cart",
          { ...cartItem, Quantity: 1 }
        );
      }

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      await Promise.all(
        cartItems.map((item) =>
          axios.delete(
            `https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/cart/${item._id}`
          )
        )
      );

      fetchCart();
    } catch (error) {
      console.error("Error clearing the cart:", error);
    }
  };

  const contextVal = {
    cartItems,
    addToCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextVal}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
