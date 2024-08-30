import React, { useContext } from "react";
import { Box } from "@mui/material";
import MedicineItem from "./MedicineItem";
import { ItemsContext } from "../../Store/ItemsContext";

function MedicineList() {
  const { items } = useContext(ItemsContext);
  return (
    <Box>
      {items.length > 0 ? <MedicineItem></MedicineItem> : "Your Store is Empty"}
    </Box>
  );
}

export default MedicineList;
