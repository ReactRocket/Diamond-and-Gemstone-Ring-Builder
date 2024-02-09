import React from "react";
import demoIMG from "../assets/images/breadcrum_icons/diamond.png";


const Breadcrumb = ({data} ) => {
  return (
    <nav
      aria-label="Breadcrumb"
      class="flex justify-center items-center max-h-[20vh] pt-10"
    >
      <ol class="flex overflow-hidden  border-y-2  border-[#EBE2FB] text-gray-600 w-full">
        <li class="flex items-center justify-center w-1/3  ">
          <a
            href="#"
            class="flex w-full h-16 items-center justify-center gap-1.5  bg-white px-4 transition hover:text-gray-900"
          >
            <div className=" h-full w-1/4 flex justify-end items-center">
              <span className="text-4xl text-gray-700  px-2 font-normal">
                {(data && data[0].number) || "0"}
              </span>
            </div>
            <div className=" h-full w-1/2  flex flex-col justify-center items-start">
              <span className="text-gray-500 text-sm">
                {" "}
                {(data && data[0].text1) || "Text-1"}
              </span>
              <span className="text-gray-800 text-xl">
                {" "}
                {(data && data[0].text2) || "Text-2"}
              </span>
            </div>
            <div className=" h-full w-1/4 flex justify-end items-center">
              <img
                src={(data && data[0].img) || demoIMG}
                className="object-cover h-1/2 aspect-square"
                alt=""
              />
            </div>
          </a>
        </li>

        <li class="relative flex items-center w-1/3">
          <span class="absolute inset-y-0 -start-px h-16 w-4 bg-white [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
          <a
            href="#"
            class="flex h-16 items-center w-full bg-[#EBE2FB] pe-4 ps-8 text-xs font-medium transition hover:text-gray-900 "
          >
            <div className=" h-full w-1/4 flex justify-end items-center">
              <span className="text-4xl text-gray-700  px-2 font-normal">
                {(data && data[1].number) || "0"}
              </span>
            </div>
            <div className=" h-full w-1/2  flex flex-col justify-center items-start">
              <span className="text-gray-500 text-sm">
                {(data && data[1].text1) || "Text-1"}
              </span>
              <span className="text-gray-800 text-xl">
                {(data && data[1].text2) || "Text-2"}
              </span>
            </div>
            <div className=" h-full w-1/4 flex justify-end items-center">
              <img
                src={(data && data[1].img) || demoIMG}
                className="object-cover h-1/2 aspect-square"
                alt=""
              />
            </div>
          </a>
        </li>

        <li class=" relative flex items-center w-1/3 ">
          <span class="absolute inset-y-0 -start-px h-16 w-4 bg-[#EBE2FB] [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
          <a
            href="#"
            class=" flex h-16 items-center w-full bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
          >
            <div className=" h-full w-1/4 flex justify-end items-center">
              <span className="text-4xl text-gray-700  px-2 font-normal">
                {(data && data[2].number) || "0"}
              </span>
            </div>
            <div className=" h-full w-1/2  flex flex-col justify-center items-start">
              <span className="text-gray-500 text-sm">
                {(data && data[2].text1) || "Text-1"}
              </span>
              <span className="text-gray-800 text-xl">
                {(data && data[2].text2) || "Text-2"}
              </span>
            </div>
            <div className=" h-full w-1/4 flex justify-end items-center">
              <img
                src={(data && data[2].img) || demoIMG}
                className="object-cover h-1/2 aspect-square"
                alt=""
              />
            </div>
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
