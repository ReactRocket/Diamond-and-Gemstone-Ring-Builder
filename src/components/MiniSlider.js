import React from "react";

// how to use it...
{
  /* <MiniSlider left={0} top={0} right={0} bottom={0} /> */
}

const MiniSlider = ({ left, right, top, bottom }) => {
  return (
    <span
      className={`
      left-[${left && (left || 0)}%]
      right-[${right && (right || 0)}%]
      top-[${top && (top || 0)}%]
      bottom-[${
        bottom && (bottom || 0)
      }%] absolute  w-full  z-0 bg-[#7C3AED] overflow-visible flex justify-center items-center max-h-[20px] max-w-[10%]`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        fill="white"
        class="z-10 bi bi-circle-fill border rounded-full border-gray-600"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
    </span>
  );
};

export default MiniSlider;
