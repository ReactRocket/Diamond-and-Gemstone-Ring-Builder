import React, { useState } from "react";

const DoubleRangeSlider = (props) => {
  const { min, max, onChange } = props;
  const [lowerValue, setLowerValue] = useState(min);
  const [upperValue, setUpperValue] = useState(max);

  const handleChange = (index, newValue) => {
    if (index === 0) {
      setLowerValue(newValue);
      if (newValue > upperValue) {
        setUpperValue(newValue);
      }
    } else {
      setUpperValue(newValue);
    }
    onChange(lowerValue, newValue);
  };

  const handleInputChange = (index, e) => {
    const newValue = parseInt(e.target.value);
    handleChange(index, newValue);
  };

  const handleMouseDown = (index) => {
    return (e) => {
      e.preventDefault();
      const newValue = Math.round(
        ((e.clientX - e.target.getBoundingClientRect().left) /
          e.target.clientWidth) *
          (max - min) +
          min
      );
      handleChange(index, newValue);
    };
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
  };

  const handleMouseMove = (index) => {
    return (e) => {
      e.preventDefault();
      const newValue = Math.round(
        ((e.clientX - e.target.getBoundingClientRect().left) /
          e.target.clientWidth) *
          (max - min) +
          min
      );
      handleChange(index, newValue);
    };
  };

  const trackStyle = {
    width: `${(upperValue - lowerValue) / (max - min) * 100}%`,
    left: `${(lowerValue - min) / (max - min) * 100}%`,
  };

  return (
    <div className="relative">
      <div
        className="absolute bg-gray-300 h-1 left-0 top-0"
        style={trackStyle}
      ></div>
      <input
        type="range"
        min={min}
        max={max}
        value={lowerValue}
        onChange={(e) => handleInputChange(0, e)}
        onMouseDown={handleMouseDown(0)}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove(0)}
        className="absolute left-0 top-0 h-1 w-full bg-transparent"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={upperValue}
        onChange={(e) => handleInputChange(1, e)}
        onMouseDown={handleMouseDown(1)}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove(1)}
        className="absolute right-0 top-0 h-1 w-full bg-transparent"
      />
    </div>
  );
};

export default DoubleRangeSlider;