import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import AdvancedFilter from "./AdvancedFilter";
import img1 from "../assets/images/breadcrum_icons/diamond-ring.png";
import img2 from "../assets/images/breadcrum_icons/diamond.png";
import img3 from "../assets/images/breadcrum_icons/engagement-ring.png";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

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

const productListArray = [
  {
    src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/efb2b7b0-5a28-4b0a-9f85-1fc8c06b542f.jpg",
    title: "2.04 Carat 6E4A7A778 Round Cut Diamond",
    price: "$7,342",
    imgLink: "/diamonds/products",
    view360: "/",
    compairLink: "/",
  },
  {
    src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/efb2b7b0-5a28-4b0a-9f85-1fc8c06b542f.jpg",
    title: "2.04 Carat 6E4A7A778 Round Cut Diamond",
    price: "$7,342",
    imgLink: "/",
    view360: "/",
    compairLink: "/",
  },
  {
    src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/efb2b7b0-5a28-4b0a-9f85-1fc8c06b542f.jpg",
    title: "2.04 Carat 6E4A7A778 Round Cut Diamond",
    price: "$7,342",
    imgLink: "/",
    view360: "/",
    compairLink: "/",
  },
  {
    src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/efb2b7b0-5a28-4b0a-9f85-1fc8c06b542f.jpg",
    title: "2.04 Carat 6E4A7A778 Round Cut Diamond",
    price: "$7,342",
    imgLink: "/",
    view360: "/",
    compairLink: "/",
  },
];
const AllFilters = () => {
  const [advanceFilterToggle, setAdvanceFilterToggle] = useState(false);

  return (
    <div className="px-10 pb-10">
      <Breadcrumb data={data} />
      <div className=" flex justify-center items-center py-7 w-full">
        <button className="w-1/4 bg-[#6d3bae] border-[#6d3bae] border-2 text-white p-2">
          MINED
        </button>
        <button className="w-1/4 border-[#6d3bae] border-2 p-2">
          LAB CREATED
        </button>
      </div>
      <AdvancedFilter advanceFilterToggle={advanceFilterToggle} />
      <div className=" flex justify-between items-center py-7 w-full">
        <span>&nbsp;</span>
        <button
          onClick={() => setAdvanceFilterToggle(!advanceFilterToggle)}
          className="w-1/5 bg-[#6d3bae] text-white p-2"
        >
          ADVANCED FILTERS
        </button>
        <span className="flex justify-center items-center gap-2 text-gray-400 cursor-pointer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
              />
            </svg>
          </span>
          <span> Reset All</span>{" "}
        </span>
      </div>
      <ProductFilter />
      <ProductList data={productListArray} />
    </div>
  );
};

export default AllFilters;
