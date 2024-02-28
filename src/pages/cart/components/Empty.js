import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="h-[35vh] w-full flex justify-end py-5 items-center flex-col gap-10">
      <h1 className="text-[#5B5E66] text-5xl font-sans">Your cart is empty</h1>
      <Link
        to={"/diamonds"}
        className="bg-[#7646D7] text-white text-lg px-10 py-3"
      >
        Continue shopping
      </Link>
    </div>
  );
};

export default Empty;
