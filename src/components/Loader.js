import React from "react";

const Loader = () => {
  return (
    <div className="z-50 h-full w-screen  bg-opacity-35 fixed top-0 left-0  flex justify-center items-center">
      <span className=" w-[100px] aspect-square border-transparent  rounded-full border-[6px] animate-spin border-t-[#7646D7]"></span>
    </div>
  );
};

export default Loader;
