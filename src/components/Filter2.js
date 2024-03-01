import React from "react";
import { Link } from "react-router-dom";

const Filter2 = () => {
  return (
    <div className="w-full  h-6 pt-8 flex flex-row justify-between  items-center">
      <Link to="/diamonds">
        <span className="text-xs underline ">BACK TO COLLECTION</span>
      </Link>
      <Link to="/diamonds">
        <span className="text-xs underline">START OVER</span>
      </Link>
      <span>&nbsp;</span>
    </div>
  );
};

export default Filter2;
