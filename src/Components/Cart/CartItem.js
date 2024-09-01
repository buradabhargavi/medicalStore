import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";

function CartItem({ item }) {
  const calculateTotal = (item) => item.Quantity * item.Price;

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
        <Typography variant="p">{`₹${item.Price}`}</Typography>
        <Typography variant="body1">
          {calculateTotal(item).toFixed(2)}
        </Typography>
      </Box>
    )
  );
}

export default CartItem;
