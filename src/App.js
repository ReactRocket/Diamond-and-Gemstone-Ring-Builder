import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Diamonds from "./pages/Diamonds";
import Gemstone from "./pages/Gemstone";
import Engagement from "./pages/Engagement";

const App = () => {
  return (
    <div className="h-screen w-screen bg-white overflow-y-scroll">
      <div className="min-h-[20vh]">
        <Header />
      </div>
      <div className="min-h-[30vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diamonds" element={<Diamonds />} />
          <Route path="/gemstones" element={<Gemstone />} />
          <Route path="/engagement" element={<Engagement />} />
        </Routes>
      </div>
      <div className="min-h-[50vh]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
