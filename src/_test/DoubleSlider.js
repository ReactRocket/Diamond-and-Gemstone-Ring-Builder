import React, { useState } from "react";

const DoubleSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (event) => {
    setMinValue(parseInt(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMaxValue(parseInt(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={minValue}
        onChange={handleMinChange}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={maxValue}
        onChange={handleMaxChange}
      />
      <p>Min Value: {minValue}</p>
      <p>Max Value: {maxValue}</p>
    </div>
  );
};

export default DoubleSlider;
