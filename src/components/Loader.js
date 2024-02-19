import React from "react";

const Loader = () => {
  return (
    <>
      <div className="h-screen w-screen bg-slate-300 bg-opacity-35 fixed top-0 left-0  flex justify-center items-center">
        <span className=" w-[15vh] aspect-square border-transparent  rounded-full border-8 animate-spin border-t-[#7646D7]"></span>
      </div>
    </>
  );
};

export default Loader;
