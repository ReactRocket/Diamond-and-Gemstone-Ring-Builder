import React from "react";

const Tooltip = ({ text, value, position }) => {
  return (
    <div className="w-full h-full  relative mt-5">
      <div
        className="w-1/6 absolute flex justify-center items-center flex-col gap-0 "
        style={{ left: `${position || 0}%` }}
      >
        <span className="bg-[#7646D7] h-5 w-5  inset-y-0 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] -rotate-90 "></span>
        <div className=" max-w-full overflow-y-scroll max-h-[100px]  bg-[#7646D7]  rounded-md p-5 text-center text-white font-semibold py-5">
          <span className="d-md-inline d-block">
            <span className="diamondtype uppercase">{text || "Title"}</span>
          </span>
          <div className="text-xl whitespace-normal break-words">
            {value || "0.00"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;