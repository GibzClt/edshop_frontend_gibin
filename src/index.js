import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from "./common/navigationBar/NavigationBar";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import ProductPage from "./components/productsPage/ProductsPage";
import ProductDetails from "./components/productDetails/ProductDetails";
import Products from "./assets/products.json";


ReactDOM.render(
  // <ProductPage isAdmin/>
  <ProductDetails product={Products}/>,
  document.getElementById('root')
);
