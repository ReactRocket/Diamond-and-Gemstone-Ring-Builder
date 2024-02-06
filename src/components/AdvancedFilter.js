import React from "react";
import asscher from "../assets/images/diamond_shapes/asscher.svg";
import cushion from "../assets/images/diamond_shapes/cushion.svg";
import emerald from "../assets/images/diamond_shapes/emerald.svg";
import heart from "../assets/images/diamond_shapes/heart.svg";
import marquise from "../assets/images/diamond_shapes/marquise.svg";
import oval from "../assets/images/diamond_shapes/oval.svg";
import pear from "../assets/images/diamond_shapes/pear.svg";
import princess from "../assets/images/diamond_shapes/princess.svg";
import radiant from "../assets/images/diamond_shapes/radiant.svg";
import round from "../assets/images/diamond_shapes/round.svg";
import Slider from "./Slider";

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

const data = [];

const advancedFilterList = [
  {
    title: "Shape",
    value: shapesArray,
  },
  {
    title: "Color",
    value: data,
  },
  {
    title: "Clarity",
    value: data,
  },
  {
    title: "Carat",
    value: data,
  },
  {
    title: "Cut",
    value: data,
  },
  {
    title: "Price",
    value: data,
  },
];

const AdvancedFilter = () => {
  return (
    <div className="min-h-[40vh] lg:h-[40vh] w-full  shadow-md shadow-black flex justify-center items-center p-5 ">
      <div className="grid  w-full h-full lg:grid-cols-2 grid-cols-1 gap-5">
        {advancedFilterList?.map((val, index) => {
          return (
            <section
              key={index}
              className="w-full h-full  flex justify-center items-center "
            >
              <div className="w-[20%] h-full  flex justify-start items-center">
                {val.title}
              </div>
              <div className="w-[80%] h-full  flex justify-start  items-center gap-2">
                {val.value?.map((val) => (
                  <img
                    src={val}
                    className="cursor-pointer aspect-square object-cover"
                    alt=""
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default AdvancedFilter;
