import React from "react";
export const ItemsContext = React.createContext({
  Items: [],
  addItem: (item) => {},
  updateItem: () => {},
  deleteItem: () => {},
});
