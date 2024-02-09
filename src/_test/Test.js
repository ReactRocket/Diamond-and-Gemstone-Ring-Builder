import React from "react";
import Slider from "../components/Slider";

const Test = () => {
  const handleRangeChange = (newRange) => {
    // Handle the updated range values here
    console.log("New range:", newRange);
  };
  return (
    <div>
      <h1>Test Mode</h1>
      <div className="container mx-auto py-8">
        <h1>Price Range Slider</h1>
        <Slider
          minPrice={100} // Minimum allowed price
          maxPrice={1000} // Maximum allowed price
          initialMin={200} // Initial minimum value
          initialMax={800} // Initial maximum value
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
};

export default Test;
