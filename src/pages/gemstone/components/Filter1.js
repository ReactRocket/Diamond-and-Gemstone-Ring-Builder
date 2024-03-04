import React , {useState}from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import yellowgem from "../assets/images/filter1/YELLOW.svg";
import pinkgem from "../assets/images/filter1/PINK.svg";
import purplegem from "../assets/images/filter1/PURPLE.svg";
import peachgem from "../assets/images/filter1/PEACH.svg";
import redgem from "../assets/images/filter1/RED.svg";
import bluegem from "../assets/images/filter1/BLUE.svg";
import greengem from "../assets/images/filter1/GREEN.svg";
import orangegem from "../assets/images/filter1/ORANGE.svg";
import browngem from "../assets/images/filter1/BROWN.svg";
import blackgem from "../assets/images/filter1/BLACK.svg";
import greygem from "../assets/images/filter1/GREY.svg";
//  for shapes

import asscher from "../../../../src/assets/images/diamond_shapes/asscher.svg";
import cushion from "../../../../src/assets/images/diamond_shapes/cushion.svg";
import emerald from "../../../../src/assets/images/diamond_shapes/emerald.svg";
import heart from "../../../../src/assets/images/diamond_shapes/heart.svg";
import marquise from "../../../../src/assets/images/diamond_shapes/marquise.svg";
import oval from "../../../../src/assets/images/diamond_shapes/oval.svg";
import pear from "../../../../src/assets/images/diamond_shapes/pear.svg";
import princess from "../../../../src/assets/images/diamond_shapes/princess.svg";
import radiant from "../../../../src/assets/images/diamond_shapes/radiant.svg";
import round from "../../../../src/assets/images/diamond_shapes/round.svg";
import Slider from "../../../components/Slider";
import ProductFilter from "../../../components/ProductFilter";
import DiamondsChild from "../../diamonds/DiamondsChild";
import ProductList from "../../../components/ProductList";

const gemsArray = [
  {
    img: yellowgem,
    name: "YELLOW",
  },
  {
    img: pinkgem,
    name: "PINK",
  },
  {
    img: purplegem,
    name: "PURPLE",
  },
  {
    img: peachgem,
    name: "PEACH",
  },
  {
    img: redgem,
    name: "RED",
  },
  {
    img: bluegem,
    name: "BLUE",
  },
  {
    img: greengem,
    name: "GREEN",
  },
  {
    img: orangegem,
    name: "ORANGE",
  },
  {
    img: browngem,
    name: "BROWN",
  },
  {
    img: blackgem,
    name: "BLACK",
  },
  {
    img: greygem,
    name: "GREY",
  },
];

const shapesArray = [
  asscher,
  cushion,
  emerald,
  heart,
  marquise,
  oval,
  pear,
  princess,
  radiant,
  round,
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
    imgLink: "/diamonds/products",
    view360: "/",
    compairLink: "/",
  },
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
    imgLink: "/diamonds/products",
    view360: "/",
    compairLink: "/",
  },
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
    imgLink: "/diamonds/products",
    view360: "/",
    compairLink: "/",
  },
];

const Filter1 = () => {
  const [activeToggle, setActiveToggle] = useState(0);
  const [activeListToggle, setActiveListToggle] = useState(0);
  return (
    <>
      <div className="px-24 min-h-screen min-w-screen ">
        <Breadcrumb />

        <div className="h-[32vh] drop-shadow-md  shadow-md shadow-black-400 mt-16 w-full ">
          <div className="min-h-[10%]  w-full ">
            <ul className="flex ">
              {gemsArray.map((val, index) => {
                return (
                  <li key={index} className="h-full w-full">
                    <img className=" h-[6vh] w-[100%]" src={val.img} />

                    <label className="flex justify-center text-sm py-2 ">
                      {val.name}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="h-[63%] mt-3 ">
            {/* for first section */}
            <div className="h-full w-[50%] flex gap-10 items-center  -mt-10 px-2 ">
              <label className="">Shapes</label>

              <ul className="flex gap-3 py-2">
                {shapesArray?.map((val, index) => {
                  return (
                    <li key={index} className="h-[10%]">
                      <img className="" src={val} />
                    </li>
                  );
                })}
              </ul>
              {/* <Slider/> */}
            </div>

            {/* for second section */}
            {/* <div className="h-full w-[50%] ">

            </div> */}
          </div>
        </div>

        <span className="flex justify-end py-3 p items-center gap-2 text-gray-400 cursor-pointer">
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
        <div className="h-[20%] w-full  py-10 ">
          <ProductFilter
            activeToggle={activeToggle}
            setActiveToggle={setActiveToggle}
            activeListToggle={activeListToggle}
            setActiveListToggle={setActiveListToggle}
          />
          {/* {activeToggle === 1 ? (
            <RecentlyViewed data={productListArray} />
          ) : activeToggle === 2 ? (
            <Comparison data={"Comparison"} />
          ) : activeListToggle ? (
            <TableView />
          ) : (
            <ProductList data={productListArray} />
          )} */}
        </div>
        <div className="h-full w-full">
          <ProductList data={productListArray}/>
        </div>
      </div>
    </>
  );
};

export default Filter1;
