import React, {useState, useEffect} from "react";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import ProductPage from "./components/productsPage/ProductsPage";
import ProductDetails from "./components/productDetails/ProductDetails";
import OrderPage from "./components/orderPage/OrderPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(){
  const [login, setLogin] = useState(Boolean(localStorage.getItem("auth")));
  const [admin, setAdmin] = useState(false);

  const handleLogin=(value)=>{
    setLogin(value);
    console.log("login set");
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductPage isLoggedIn={login} setLogin={handleLogin} />} />
      <Route path="/login" element={<SignIn isLoggedIn={login} setLogin={handleLogin}/>} />
      <Route path="/signup" element={<SignUp isLoggedIn={login} />} />
      <Route path="/product/:id/" element={<ProductDetails isLoggedIn={login} setLogin={handleLogin} />} />
      <Route path="/order/:id" element={<OrderPage isLoggedIn={login} setLogin={handleLogin} />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;