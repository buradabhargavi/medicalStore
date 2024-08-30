import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ItemsProvider from "./Store/ItemsProvider";
import CartProvider from "./Store/CartProvider";
import Header from "./Components/Header/Header";
import MedicineForm from "./Components/MedicineForm/MedicineForm";
import MedicineList from "./Components/MedicineList/MedicineList";
import CartModal from "./Components/Cart/CartModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="App">
      <ItemsProvider>
        <CartProvider>
          <Header
            onCartOpen={handleOpen}
            setOpenForm={setOpenForm}
            openForm={openForm}
          />
          {openForm ? (
            <MedicineForm setOpenForm={setOpenForm}></MedicineForm>
          ) : (
            <MedicineList></MedicineList>
          )}
          <CartModal open={isOpen} onClose={handleClose} />
        </CartProvider>
      </ItemsProvider>
    </div>
  );
}

export default App;
