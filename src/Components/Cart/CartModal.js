import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CartItem from "./CartItem";
import { CartContext } from "../../Store/CartContext";

function CartModal({ open, onClose }) {
  const { cartItems, clearCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + Number(item.Quantity) * Number(item.Price),
    0
  );

  const handleCheckout = () => {
    clearCart();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Your Cart</DialogTitle>
      <DialogContent>
        {cartItems.length > 0 ? (
          <Box>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "flex-end",
                textAlign: "right",
                borderTop: "1px solid black",
                paddingTop: "15px",
              }}
            >
              <Typography variant="h6">Total Amount:</Typography>
              <Typography variant="h6">{totalAmount}</Typography>
            </Box>
          </Box>
        ) : (
          <Typography>No items in the cart</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleCheckout} variant="contained" color="primary">
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CartModal;
