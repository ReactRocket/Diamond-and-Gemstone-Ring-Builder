import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

import img1 from "../../assets/images/breadcrum_icons/diamond-ring.png";
import img2 from "../../assets/images/breadcrum_icons/diamond.png";
import img3 from "../../assets/images/breadcrum_icons/engagement-ring.png";
import { Link } from "react-router-dom";

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

const DiamondsChild = () => {
  return (
    <div className="mx-auto w-[90%]">
      <Breadcrumb data={data} />
      <div className="w-full  h-6 mt-8 flex flex-row justify-between  items-center">
        <Link to="/">
          <span className="text-xs underline ">BACK TO COLLECTION</span>
        </Link>
        <Link to="dianmond">
          <span className="text-xs underline">START OVER</span>
        </Link>
        <span>&nbsp;</span>
      </div>
      <div className="bg-red-400 px-20  min-h-[50vh] w-full">
        <div className="bg-yellow-500 flex h-[50vh]  w-full">
          <div className="h-full w-[50%]  bg-black">
            <div className="bg-red-700 h-10 w-10">
            <ul className="">
              <li className="bg-orange-300">

              </li>
            </ul>
            </div>
            
          </div>
          <div className="h-full w-[50%] bg-green-600"></div>
        </div>
      </div>
    </div>
  );
};

export default DiamondsChild;
