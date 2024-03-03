import React from "react";
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

import asscher from '../../../../src/assets/images/diamond_shapes/asscher.svg'
import cushion from '../../../../src/assets/images/diamond_shapes/cushion.svg'
import emerald from '../../../../src/assets/images/diamond_shapes/emerald.svg'
import heart from '../../../../src/assets/images/diamond_shapes/heart.svg'
import marquise from '../../../../src/assets/images/diamond_shapes/marquise.svg'
import oval from '../../../../src/assets/images/diamond_shapes/oval.svg'
import pear from '../../../../src/assets/images/diamond_shapes/pear.svg' 
import princess from '../../../../src/assets/images/diamond_shapes/princess.svg'
import radiant from '../../../../src/assets/images/diamond_shapes/radiant.svg'
import round from '../../../../src/assets/images/diamond_shapes/round.svg'

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

const Filter1 = () => {
  return (
    <>
      <div className="px-24 min-h-screen min-w-screen">
        <Breadcrumb />

        <div className="h-[32vh]  shadow-lg drop-shadow-md shadow-black-400 mt-16 w-full ">
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
                      {shapesArray?.map((val,index) => {
                        return(
                        <li key={index} className="h-[10%]">
                         <img className="" src={val}/>
                        </li>
                        );
                      })}
                  </ul>
              
            </div>

            {/* for second section */}
            {/* <div className="h-full w-[50%] ">

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter1;
