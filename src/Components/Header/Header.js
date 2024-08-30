import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";

function Header({ setOpenForm, openForm, onCartOpen }) {
  return (
    <Box
      sx={{
        height: "100px",
        background: "orange",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10%",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Medical Store</Typography>
      <Box
        sx={{
          display: "flex",
          width: "300px",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{ color: "black", fontWeight: "700" }}
          onClick={() => setOpenForm(!openForm)}
        >
          {" "}
          <MedicalServicesRoundedIcon />
          Add medicine
        </Button>
        <Button sx={{ color: "black" }} onClick={onCartOpen}>
          {" "}
          <ShoppingCartRoundedIcon />
          Cart
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
