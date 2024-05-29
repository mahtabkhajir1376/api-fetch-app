import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../screen/Home";
import AboutUs from "../screen/AboutUs";
import Blog from "../screen/Blog";
import Contact from "../screen/Contact";
import Footer from "../components/Footer";
import Products from "../screen/Products";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};
export default Root;
