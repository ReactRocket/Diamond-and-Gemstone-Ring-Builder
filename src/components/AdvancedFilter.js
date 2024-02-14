import React, { useState } from "react";
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

const advancedFilterList1 = [
  {
    title: "Shape",
    value: shapesArray,
  },
  {
    title: "Carat",
    value: data,
  },
  {
    title: "Color",
    value: ["L", "K", "J", "I", "H", "G", "F", "E", "D"],
  },
  {
    title: "Cut",
    value: ["Very Good", "Excellent", "Ideal"],
  },
  {
    title: "Clarity",
    value: ["I1", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "FL/IF"],
  },

  {
    title: "Price",
    value: data,
  },
];
const advancedFilterList2 = [
  {
    title: "Polish",
    value: ["Excellent", "Very Good", "Good"],
  },
  {
    title: "Symmetry",
    value: ["Excellent", "Very Good", "Good"],
  },
  {
    title: "Fluor",
    value: ["None", "Faint", "Medium", "Strong"],
  },
  {
    title: "Table %",
    value: data,
  },
  {
    title: "Depth %",
    value: data,
  },

  {
    title: "L/W Ratio",
    value: data,
  },
];

const AdvancedFilter = ({ advanceFilterToggle }) => {
  const handleSliderChange = (e) => {
    console.log(e);
  };

  return (
    <div className="min-h-[40vh] lg:min-h-[40vh] transition-transform duration-1000 ease-linear w-full  shadow-md shadow-black flex justify-center items-center p-5 ">
      {/* range filters */}
      <div className="grid  w-full h-full lg:grid-cols-2 grid-cols-1 gap-5">
        {advancedFilterList1?.map((val, index) => {
          return (
            <section
              key={index}
              className="w-full h-full  flex justify-center items-center "
            >
              <div className="w-[20%] h-full  flex justify-start items-center">
                {val.title}
              </div>
              {val.title === "Shape" ? (
                <div className="w-[80%] h-full  flex justify-start  items-center gap-2">
                  {val.value?.map((val) => (
                    <img
                      src={val}
                      className="cursor-pointer aspect-square object-cover"
                      alt=""
                    />
                  ))}
                </div>
              ) : (
                <div className="w-full h-full  flex justify-center  items-center">
                  <Slider
                    dataArray={val.value}
                    min={1}
                    max={7}
                    onChange={({ min, max }) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />
                </div>
              )}
            </section>
          );
        })}

        {advanceFilterToggle && <hr className="col-span-2 py-3 " />}
        {advanceFilterToggle &&
          advancedFilterList2?.map((val, index) => {
            return (
              <section
                key={index}
                className="w-full h-full  flex justify-center items-center"
              >
                <div className="w-[20%] h-full  flex justify-start items-center">
                  {val.title}
                </div>
                {val.title === "Shape" ? (
                  <div className="w-[80%] h-full  flex justify-start  items-center gap-2">
                    {val.value?.map((val) => (
                      <img
                        src={val}
                        className="cursor-pointer aspect-square object-cover"
                        alt=""
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-full  flex justify-center  items-center">
                    <Slider
                      dataArray={val.value}
                      min={1}
                      max={7}
                      onChange={({ min, max }) =>
                        console.log(`min = ${min}, max = ${max}`)
                      }
                    />
                  </div>
                )}
              </section>
            );
          })}
      </div>
    </div>
  );
};

export default AdvancedFilter;
