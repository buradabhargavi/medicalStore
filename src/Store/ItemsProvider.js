import React, { useState, useEffect } from "react";
import axios from "axios";
import { ItemsContext } from "./ItemsContext";

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = () => {};

  const contextValue = {
    items,
    addItem,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
