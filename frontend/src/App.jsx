import React from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProductDetails from "./pages/ProductDetails";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp.jsx/SignUp";
import SignUpFormik from "./components/SignUp.jsx/SignUpFormik";
import UserList from "./pages/UserList";
import Dashboard from "./pages/Dashboard";
// :Home Page, Store Page, Sign Up Page, Login Page, Product Details
function App() {
  const location = useLocation();

  return (
    <div>
        {
          location.pathname !== "/dashboard" && <Header />
        }
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupformik" element={<SignUpFormik />} />
          <Route path="/user_list" element={<UserList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
        {/* <Footer /> */}
        {
          location.pathname !== "/dashboard" && <Footer />
        }
    </div>
  );
}

export default App;
