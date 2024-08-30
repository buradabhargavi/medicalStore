import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";

function CartItem({ item }) {
  return (
    CartItem && (
      <Box
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="p">{item.medicineName}</Typography>
        <Typography variant="p">{item.Quantity}</Typography>
        <Typography variant="p">{item.Price}</Typography>
      </Box>
    )
  );
}

export default CartItem;
