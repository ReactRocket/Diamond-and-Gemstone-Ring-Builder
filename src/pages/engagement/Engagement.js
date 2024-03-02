import React from "react";
import { Link } from "react-router-dom";
import Diamond1 from "../home/assets/images/card/Diamond1/Diamond1.webp";
import Diamond2 from "../home/assets/images/card/Diamond2/Diamond2.webp";
import Diamond3 from "../home/assets/images/card/Diamond3/Diamond3.webp";
import Diamond4 from "../home/assets/images/card/Diamond4/Diamond4.webp";

import Breadcrumb from "../../components/Breadcrumb";
import Filter1 from "../../components/Filter1";
const featuredProductsListArray = [
  {
    img: Diamond1,

    title: "Shiera Half Bezel Solitaire Engagement Ring",
    price: "$1,100",
  },

  {
    img: Diamond2,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
  {
    img: Diamond3,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
  {
    img: Diamond1,

    title: "Shiera Half Bezel Solitaire Engagement Ring",
    price: "$1,100",
  },

  {
    img: Diamond2,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
  {
    img: Diamond3,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
  {
    img: Diamond1,

    title: "Shiera Half Bezel Solitaire Engagement Ring",
    price: "$1,100",
  },

  {
    img: Diamond2,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
  {
    img: Diamond3,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },

  {
    img: Diamond4,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
  {
    img: Diamond3,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },

  {
    img: Diamond4,

    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
];

const Engagement = ({ data }) => {
  return (
    <div className="h-full w-full px-20">
      {/* section 1 */}
      <div>
        <Breadcrumb />

        <h1 className="text-[#7646D7] text-4xl font-sans p-10">
          Engagement Ring{" "}
        </h1>
      </div>

      <div className="min-h-[100vh] w-full px-10">
        {/* fist Section */}

        <Filter1 />
        {/* section section */}

        <div className="p-10 py-8  h-[85%] w-full ">
          <ul className="relative grid  gap-6 grid-cols-4">
            {featuredProductsListArray?.map((val, index) => {
              return (
                <Link to="/engagement/products">
                  <li key={index}>
                    <img
                      className="p-3 w-96 h-12vh hover:scale-105 object-scale-down transition-all duration-500"
                      src={val.img}
                      alt={val.img}
                      loading="lazy"
                    />

                    <div className=" text-center">
                      <span className="text-sm text-center  hover:border-b border-[#7646D7] text-slate-600">
                        {val.title}
                      </span>
                    </div>

                    <div className="text-center">
                      <p className="text-slate-900 ">{val.price}</p>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
