/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ComparisonDataArray = [
  {
    "Actual Image": {
      src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/43dc033f-9a1e-47b6-adf2-8cd30df94438.jpg",
      title: "2.2 Carat E-VS1 Round Cut Diamond",
      link: "/diamonds/products",
    },
    Price: "$5,005",
    SKU: "1397ECMSY96ONXX",
    Shape: "Round",
    Carat: "2.20",
    Color: "E",
    Clarity: "VS1",
    Cut: "Ideal",
    Polish: "Excellent",
    Symmetry: "Excellent",
    Fluorescence: "None",
    "Measurements (mm)": "8.26 - 8.29 * 5.16",
    "Table %": "57",
    "Depth %": "62.4",
    "L/W Ratio": "1",
    Lab: "IGI",
  },
];

const Comparison = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    ComparisonDataArray.map((val) => {
      const keys = Object.keys(val);
      setData(keys);
    });
  }, []);

  console.log(data);

  return (
    <>
      <div className=" h-full w-auto overflow-x-auto flex   my-10  text-gray-500">
        <ul className="w-1/6 " key={-1}>
          {data?.map((val, index) => {
            return (
              <li
                key={index}
                className={`${
                  index === 0 && "h-44 flex justify-start items-center"
                } even:bg-gray-100 p-3`}
              >
                <h2>{val}</h2>
              </li>
            );
          })}
        </ul>
        {ComparisonDataArray.map((val, index) => {
          return (
            <ul key={index} className="w-1/4">
              {data?.map((key, index) => {
                return index === 0 ? (
                  <li
                    id="comparison-first-item"
                    key={index}
                    className="even:bg-gray-100 flex flex-col justify-start items-end p-3 h-44 gap-2"
                  >
                    <button>Remove</button>
                    <img
                      className="w-24 aspect-square object-cover"
                      src={val[key]["src"]}
                      alt={val[key]["title"]}
                    />
                    <Link
                      className="underline underline-offset-2 decoration-blue-700 hover:decoration-black active:decoration-red-700 visited:decoration-purple-700 text-pretty text-end"
                      to={val[key]["link"]}
                    >
                      {val[key]["title"]}
                    </Link>
                  </li>
                ) : (
                  <li key={index} className="even:bg-gray-100 text-end p-3">
                    <h2>{val[key]}</h2>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Comparison;
