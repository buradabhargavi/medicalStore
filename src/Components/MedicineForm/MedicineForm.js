import { TextField, Box, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { ItemsContext } from "../../Store/ItemsContext";

function MedicineForm({ setOpenForm }) {
  const ctx = useContext(ItemsContext);

  const [medicineDetails, setMedicineDetails] = useState({
    medicineName: "",
    description: "",
    Quantity: 0,
    Price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now().toString();
    const updatedDetails = { ...medicineDetails, id };
    ctx.addItem(updatedDetails);
    setOpenForm(false);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        maxWidth: "500px",
        height: "400px",
        margin: "20px auto",
        justifyContent: "space-between",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Button
        onClick={() => setOpenForm(false)}
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "0",
          height: "30px",
          minWidth: "30px",
          color: "red",
          "&:hover": {
            background: "red",
            color: "black",
          },
        }}
      >
        &times;
      </Button>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
          }}
        >
          <label htmlFor="medicineName">Medicine Name</label>
          <TextField
            name="medicineName"
            id="medicineName"
            sx={{ width: "100%" }}
            size="small"
            value={medicineDetails.medicineName}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
          }}
        >
          <label htmlFor="description">Description</label>
          <TextField
            name="description"
            id="description"
            sx={{ width: "100%" }}
            size="small"
            value={medicineDetails.description}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
          }}
        >
          <label htmlFor="Quantity">Quantity</label>
          <TextField
            name="Quantity"
            id="Quantity"
            sx={{ width: "100%" }}
            size="small"
            value={medicineDetails.Quantity}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
          }}
        >
          <label htmlFor="Price">Price</label>
          <TextField
            name="Price"
            id="Price"
            sx={{ width: "100%" }}
            size="small"
            value={medicineDetails.Price}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button variant="contained" color="secondary" type="submit">
            Add Item
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default MedicineForm;
