import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Diamonds from "./pages/Diamonds";
import Gemstone from "./pages/Gemstone";
import Engagement from "./pages/Engagement";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diamonds" element={<Diamonds />} />
          <Route path="/gemstones" element={<Gemstone />} />
          <Route path="/engagement" element={<Engagement />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
