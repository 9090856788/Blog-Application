/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ProfileUser from "./components/ProfileUser.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path ='/profile' element={<ProfileUser/>}/>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
