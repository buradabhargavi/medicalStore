import React, { useState, useEffect } from "react";
import axios from "axios";
import { ItemsContext } from "./ItemsContext";

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/items"
      );
      setItems(response.data);
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (item) => {
    try {
      await axios.post(
        "https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/items",
        item
      );
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(
        `https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/items/${id}`
      );
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateItemQuantity = async (itemId, quantityChange) => {
    try {
      const itemResponse = await axios.get(
        `https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/items/${itemId}`
      );
      const item = itemResponse.data;
      const updatedQuantity = (item.Quantity - quantityChange).toString();
      const { _id, ...i } = item;
      if (item.Quantity > 0) {
        await axios.put(
          `https://crudcrud.com/api/7d1aeda37b5642cb88fc667bbc8bd4f8/items/${itemId}`,
          { ...i, Quantity: updatedQuantity }
        );
      } else {
        console.log("out of stock");
      }
      fetchItems();
    } catch (error) {
      console.log("Error updating item quantity:", error);
    }
  };

  const contextValue = {
    items,
    addItem,
    deleteItem,
    updateItemQuantity,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
