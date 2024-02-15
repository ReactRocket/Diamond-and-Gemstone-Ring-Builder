import React from "react";
import Card from "./Card";
const ProductList = ({ data }) => {
  return (
    <div className="min-h-[10vh] w-full mt-5">
      {data?.length > 0 ? (
        <ul className="grid grid-cols-4 gap-5">
          {data?.map((val, index) => {
            return (
              <li key={index}>
                  <Card data={val} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h1 className="text-[#7646D7] text-[52px] font-sans p-10">
          Natural Diamonds
        </h1>
      )}
    </div>
  );
};

export default ProductList;
