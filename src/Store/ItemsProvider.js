import React, { useState, useEffect } from "react";
import axios from "axios";
import { ItemsContext } from "./ItemsContext";

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/1856563a86f14a328671194a5e701ed1/items"
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
        "https://crudcrud.com/api/1856563a86f14a328671194a5e701ed1/items",
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
        `https://crudcrud.com/api/1856563a86f14a328671194a5e701ed1/items/${id}`
      );
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    items,
    addItem,
    deleteItem,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
