import React from "react";
import Breadcrumb from "./Breadcrumb";
import AdvancedFilter from "./AdvancedFilter";

const AllFilters = () => {
  return (
    <div className="px-10 pb-10">
      <Breadcrumb />
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
