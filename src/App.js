// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Diamonds from "./pages/diamonds/Diamonds";
import Gemstone from "./pages/gemstone/Gemstone";
import Engagement from "./pages/engagement/Engagement";
import DiamondsChild from "./pages/diamonds/DiamondsChild";
import { Error } from "./pages/error/Error";
import Test from "./_test/Test";
import Loader from "./components/Loader";
import { backToTopScreen } from "./utils/global.functions";
import ScrollToTop from "./components/ScrollToTop";

// Define the App component
const App = () => {
  // State to manage the loading status of the application
  const [isLoading, setIsLoading] = useState(false);
  // Get the current location from the router
  const location = useLocation();
  // Effect to handle the loading status of the application
  useEffect(() => {
    setIsLoading(true);
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // Scroll to the top of the screen when the location changes
    backToTopScreen();
  }, [location.pathname]);

  // Render the application
  return (
    <div className=" h-screen w-screen bg-white ">
      {/* Render the header */}
      <div className="min-h-[15vh]">
        <Header />
      </div>
      {/* Render the loader if the application is loading and the testing flag is not set */}
      {!localStorage.getItem("testing") && isLoading && (
        <Loader isLoading={isLoading} />
      )}

      {/* Render the main content of the application */}
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

      {/* Render the footer */}
      <div className="min-h-[50vh]">
        <ScrollToTop />

        <Footer />
      </div>
    </div>
  );
};

// Export the App component
export default App;