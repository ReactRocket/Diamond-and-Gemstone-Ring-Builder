import React from "react";
import { Link } from "react-router-dom";
import KI_LOGO from "../assets/images/KI_LOGO.png";

const menuList = [
  {
    title: "HOME",
    to: "/HOME",
  },
  {
    title: "DIAMONDS",
    to: "/DIAMONDS",
  },
  {
    title: "GEMSTONES",
    to: "/GEMSTONES",
  },
  {
    title: "ENGAGEMENT",
    to: "/ENGAGEMENT",
  },
];

const Header = () => {
  return (
    <>
      <div className="h-[6vh] w-full bg-[#FFFFFF] border-b flex justify-center items-center">
        <h1 className="text-sm font-serif  text-[#333641]">
          Welcome to our store
        </h1>
      </div>
      <header className="h-[10vh] border-b  flex justify-center items-center px-10  gap-5">
        <section className=" h-full w-1/3 flex gap-2  justify-center items-center ">
          <div className="w-1/2 text-right flex justify-center items-center border-r-black border-r">
            <p className="font-bold text-sm text-[#5724C5]">
              Diamond & Gemstone <br /> Ring Builder
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-full h-full ">
              <h1 className=" font-thin">POWERED BY</h1>
              <img src={KI_LOGO} className="object-left w-3/4" alt="" />
            </div>
          </div>
        </section>
        <section className=" h-full w-1/3 ">
          <ul className="flex justify-around items-center h-full w-full font-light">
            {menuList?.map((val, i) => {
              return (
                <li key={i}>
                  {/* <Link to={val.to}>{val.title}</Link> */}
                  {val.title}
                </li>
              );
            })}
          </ul>
        </section>
        <section className=" h-full w-1/3 flex justify-end items-center">
          <ul className="flex justify-center items-center gap-5">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
