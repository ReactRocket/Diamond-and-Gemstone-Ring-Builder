import React, { useState, useRef } from "react";

const Slider = ({
  minPrice,
  maxPrice,
  initialMin,
  initialMax,
  onChange,
  step = 1, // Optional step value for discrete slider
  trackColor = "bg-gray-200", // Customize track color
  handleColor = "bg-blue-500", // Customize handle color
  labelColor = "text-gray-700", // Customize label color
  minLabel = "Min",
  maxLabel = "Max",
  handleLabels = false, // Option to show labels on handles
  ariaLabels = {
    // Customize accessibility labels
    minHandle: "Minimum price handle",
    maxHandle: "Maximum price handle",
  },
}) => {
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);
  const sliderRef = useRef(null);
  const minHandleRef = useRef(null);
  const maxHandleRef = useRef(null);

  const handleMinChange = (event) => {
    const newMin = parseFloat(event.target.value);
    if (newMin < minPrice) {
      setMin(minPrice);
    } else if (newMin > max) {
      setMin(max);
    } else {
      setMin(newMin);
      sliderRef.current.style.left = `${
        ((newMin - minPrice) / (maxPrice - minPrice)) * 100
      }%`;
      minHandleRef.current.style.left = `${
        ((newMin - minPrice) / (maxPrice - minPrice)) * 100
      }%`;
    }
  };

  const handleMaxChange = (event) => {
    const newMax = parseFloat(event.target.value);
    if (newMax > maxPrice) {
      setMax(maxPrice);
    } else if (newMax < min) {
      setMax(min);
    } else {
      setMax(newMax);
      sliderRef.current.style.right = `${
        100 - ((newMax - minPrice) / (maxPrice - minPrice)) * 100
      }%`;
      maxHandleRef.current.style.right = `${
        100 - ((newMax - minPrice) / (maxPrice - minPrice)) * 100
      }%`;
    }
  };

  const handleSlide = (event, handleRef) => {
    const handlePosition = handleRef.current.getBoundingClientRect().left;
    const trackPosition = sliderRef.current.getBoundingClientRect().left;
    const newPosition =
      ((handlePosition - trackPosition) /
        (sliderRef.current.offsetWidth - handleRef.current.offsetWidth)) *
      100;

    if (handleRef === minHandleRef) {
      setMin(
        Math.max(
          minPrice,
          Math.floor((newPosition / 100) * (maxPrice - minPrice) + minPrice) /
            step
        ) * step
      );
      sliderRef.current.style.left = `${newPosition}%`;
      maxHandleRef.current.style.left = `${Math.max(newPosition, max) * 100}%`;
    } else {
      setMax(
        Math.min(
          maxPrice,
          Math.floor((newPosition / 100) * (maxPrice - minPrice) + minPrice) /
            step
        ) * step
      );
      sliderRef.current.style.right = `${100 - newPosition}%`;
      minHandleRef.current.style.right = `${
        100 - Math.min(newPosition, min) * 100
      }%`;
    }

    onChange && onChange({ min, max });
  };

  return (
    <div className="relative flex items-center gap-4 mt-4">
      <span className={`${labelColor} text-sm font-medium`}>{minLabel}:</span>
      <input
        type="number"
        min={minPrice}
        max={maxPrice}
        value={min}
        onChange={handleMinChange}
        className="bg-gray-200 focus:bg-white focus:outline-none border rounded-sm px-2 py-1 text-right w-20 mr-2"
        aria-label={`Minimum price: ${min}`}
      />
      <span className={`${labelColor} text-sm font-medium`}>{maxLabel}:</span>
      <input
        type="number"
        min={minPrice}
        max={maxPrice}
        value={max}
        onChange={handleMaxChange}
        className="bg-gray-200 focus:bg-white focus:outline-none border rounded-sm px-2 py-1 text-right w-20"
        aria-label={`Maximum price: ${max}`}
      />
      <div className={`absolute left-0 right-0 ${trackColor} h-2 rounded-full`}>
        <div
          ref={minHandleRef}
          className={`rounded-full ${handleColor} w-4 h-4 cursor-pointer left-0 -translate-x-1/2`}
          onMouseDown={(e) => handleSlide(e, minHandleRef)}
          aria-label={ariaLabels.minHandle}
        />
        <div
          ref={maxHandleRef}
          className={`rounded-full ${handleColor} w-4 h-4 cursor-pointer right-0 -translate-x-1/2`}
          onMouseDown={(e) => handleSlide(e, maxHandleRef)}
          aria-label={ariaLabels.maxHandle}
        />
        {handleLabels && (
          <>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              {min}
            </span>
            <span className="absolute -top-6 right-1/2 transform translate-x-1/2">
              {max}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Slider;
