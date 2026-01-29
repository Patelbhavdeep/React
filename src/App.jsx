// import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./component/auth/SignIn";
import Navbar from "./component/Home/Navbar";
import Products from "./component/Products/Products";
import ProductDetail from "./component/Products/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
