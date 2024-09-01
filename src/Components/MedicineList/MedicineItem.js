import { Button, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import { ItemsContext } from "../../Store/ItemsContext";

function MedicineItem({ item }) {
  const { addToCart } = useContext(CartContext);
  const { deleteItem, updateItemQuantity } = useContext(ItemsContext);
  // console.log(addToCart);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        height: "50px",
        borderBottom: "1px solid green",
        marginBottom: "10px",
      }}
    >
      <Typography variant="p">{item.medicineName}</Typography>
      <Typography variant="p">{item.description}</Typography>
      <Typography variant="p">{`₹${item.Price}`}</Typography>
      <Typography variant="p">
        {item.Quantity > 0 ? item.Quantity : "OUT OF STOCK"}
      </Typography>
      <Box sx={{ display: "flex", gap: "10px" }}>
        {/*  <Button
          sx={{ background: "yellow", color: "black" }}
          onClick={updateItem()}
        >
          Edit
        </Button> */}
        <Button
          sx={{ background: "red", color: "black" }}
          onClick={() => deleteItem(item._id)}
        >
          Delete
        </Button>
      </Box>
      <Button
        sx={{ background: "green", color: "black" }}
        onClick={() => {
          addToCart(item);
          updateItemQuantity(item._id, 1);
        }}
      >
        Add to cart
      </Button>
    </Box>
  );
}

export default MedicineItem;
