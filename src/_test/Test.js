import React from "react";
import DoubleRangeSlider from "../components/Slider";

const Test = () => {
  const handleRangeChange = (newRange) => {
    // Handle the updated range values here
    console.log("New range:", newRange);
  };
  return (
    <div>
      <h1>Test Mode</h1>
      <DoubleRangeSlider />
    </div>
  );
};

export default Test;
