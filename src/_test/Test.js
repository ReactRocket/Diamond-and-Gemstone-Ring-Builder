import React from "react";
import ProductChild from "../components/ProductChild";
import ZoomView from "../components/ZoomView";
import SideMenu from "../components/SideMenu";

const menuList = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "DIAMONDS",
    to: "/diamonds",
  },
  {
    title: "GEMSTONES",
    to: "/gemstones",
  },
  {
    title: "ENGAGEMENT",
    to: "/engagement",
  },
];
const Test = () => {
  return (
    // <div className="h-screen w-screen flex justify-center items-center">
      <div>
        {/* <h1>Test Mode</h1> */}
        {/* <ProductChild/> */}
        {/* <ZoomView/> */}
        <SideMenu data={menuList}/>
      </div>
    // </div>
  );
};

export default Test;
