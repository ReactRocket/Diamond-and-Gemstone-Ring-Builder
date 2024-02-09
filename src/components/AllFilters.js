import React from "react";
import Breadcrumb from "./Breadcrumb";
import AdvancedFilter from "./AdvancedFilter";
import img1 from "../assets/images/breadcrum_icons/diamond-ring.png";
import img2 from "../assets/images/breadcrum_icons/diamond.png";
import img3 from "../assets/images/breadcrum_icons/engagement-ring.png";

const data = [
  {
    number: 1,
    text1: "Choose a",
    text2: "Diamond",
    img: img2,
  },
  {
    number: 2,
    text1: "Choose a",
    text2: "Setting",
    img: img3,
  },
  {
    number: 3,
    text1: "Review",
    text2: "Complete",
    img: img1,
  },
];
const AllFilters = () => {
  return (
    <div className="px-10 pb-10">
      <Breadcrumb data={data}  />
      <div className=" flex justify-center items-center py-7 w-full">
        <button className="w-1/4 bg-[#6d3bae] border-[#6d3bae] border-2 text-white p-2">
          MINED
        </button>
        <button className="w-1/4 border-[#6d3bae] border-2 p-2">
          LAB CREATED
        </button>
      </div>
      <AdvancedFilter />
      <div className=" flex justify-center items-center py-7 w-full">
        <button className="w-1/5 bg-[#6d3bae] text-white p-2">
          ADVANCED FILTERS
        </button>
      </div>
    </div>
  );
};

export default AllFilters;
