import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import CartItem from "./CartItem";
import { CartContext } from "../../Store/CartContext";

function CartModal({ open, onClose }) {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>your Cart</DialogTitle>
      <DialogContent>
        {cartItems
          ? cartItems.map((item) => (
              <CartItem item={item} /* key={item.id} */></CartItem>
            ))
          : "Cart is empty"}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={onClose} variant="contained" color="primary">
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CartModal;
