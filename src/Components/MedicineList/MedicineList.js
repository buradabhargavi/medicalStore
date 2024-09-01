import React, { useContext } from "react";
import { Box } from "@mui/material";
import MedicineItem from "./MedicineItem";
import { ItemsContext } from "../../Store/ItemsContext";

function MedicineList() {
  const { items } = useContext(ItemsContext);
  return (
    <Box
      sx={{
        padding: "3%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px",
      }}
    >
      {items.length > 0
        ? items.map((item) => <MedicineItem item={item}></MedicineItem>)
        : "Your Store is Empty"}
    </Box>
  );
}

export default MedicineList;
