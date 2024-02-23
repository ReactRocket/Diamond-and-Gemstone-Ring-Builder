import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Diamonds from "./pages/diamonds/Diamonds";
import Gemstone from "./pages/gemstone/Gemstone";
import Engagement from "./pages/engagement/Engagement";
import DiamondsChild from "./pages/diamonds/DiamondsChild";
import { Error } from "./pages/error/Error";
import Test from "./_test/Test";

const App = () => {
  return (
    <div className=" h-screen w-screen bg-white overflow-y-scroll">
      <div className="min-h-[15vh]">
        <Header />
      </div>
      <div className="min-h-[35vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diamonds" element={<Diamonds />} />
          <Route path="/diamonds/products" element={<DiamondsChild />} />

          <Route path="/gemstones" element={<Gemstone />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div className="min-h-[50vh]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
