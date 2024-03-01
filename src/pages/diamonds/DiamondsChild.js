import React, { useState, useEffect } from "react";
import "./resources/css/DiamondsChild.css";
import Breadcrumb from "../../components/Breadcrumb";

import sample1 from "./assets/images/Sample1.jpg";
import Thumb1 from "./assets/images/Thumb1.jpg";
import diamond_carat from "./assets/images/round-diamond-1.webp";

import { Link } from "react-router-dom";
import View360Modal from "../../components/View360Modal";
import Tooltip from "../../components/Tooltip";

import fair from "./assets/images/Cut Grade/fair-poor-cut.svg";
import good from "./assets/images/Cut Grade/good-cut.svg";
import ideal from "./assets/images/Cut Grade/ideal-excellent-cut.svg";
import verygood from "./assets/images/Cut Grade/verygood-cuts.svg";
import MiniSlider from "../../components/MiniSlider";
import Filter2 from "../../components/Filter2";

const diamondInformationArray = [
  { SKU: "132FA4FITLRIQQD" },
  { Shape: "Round" },
  { Carat: "2.04" },
  { Color: "D" },
  { Clarity: "VS1" },
  { Cut: "Excellent" },
  { Polish: "Excellent" },
  { Symmetry: "Excellent" },
  { Fluorescence: "NON" },
  { "Measurements (mm)": "8.2 - 8.21 * 4.94" },
  { "Table %": "58" },
  { "Depth %": "60.2" },
  { "L/W Ratio": "1" },
  { "LAB Report": "GIA" },
];

const diamondDetailInformationArray = [
  {
    title: "Carat Weight",
    value: "2.04 CT",
    discription:
      "A carat is simply a weight measurement for gemstones. Most people think the higher the carat number, the larger the stone is; however this isn’t always true. The cut of the gemstone makes a big difference in how large the stone appears. For this reason, it’s often a good idea to choose a gemstone slightly below your ideal carat weight but with a better cut. The savings can be significant.",
    data: [0.5, 0.1, 1.5, 2, 2.5, 3],
  },
  {
    title: "Color Grade",
    value: "D",
    discription:
      "Your diamond's Color rating is D. Absolutely colourless and rare. Recommended set in platinum or white gold settings.",
    data: [
      {
        title: "Colorless",
        value: "D E F",
      },
      {
        title: "Near Colorless",
        value: "G H I J",
      },
      {
        title: "Faint Color",
        value: "K L M (Not Carried by us.)",
      },
    ],
  },
  {
    title: "Cut Grade",
    value: "Excellent",
    discription:
      "Excellent cut diamonds radiate with magnificent sparkle, fire, and brilliance due to almost all of the incoming light is reflected through their table.",
    data: [
      {
        title: "Ideal / Excellent Cut",
        image: ideal,
      },
      {
        title: "Very Good Cut",
        image: verygood,
      },
      {
        title: "Good Cut",
        image: good,
      },
      {
        title: "Fair / Poor Cut \n (Not Carried by Us)",
        image: fair,
      },
    ],
  },
  {
    title: "Clarity Grade",
    value: "VVS1",
    discription:
      "Your diamond has VVS1 (Very Very Slightly Included 1) clarity rating. Inclusions are so slight; they are difficult for even a skilled grader to see under 10x magnification.",
    data: [
      {
        title: "Flawless/Internally Flawless",
        value: "FL IF",
      },
      {
        title: "Very Very Slightly Included",
        value: "VVS1 VVS2",
      },
      {
        title: "Very Slightly Included",
        value: "VS1 VS2",
      },
      {
        title: "Slightly Included",
        value: "SI1 SI2",
      },
      {
        title: "Included",
        value: "I1 I2 I3  \n (Not Carried by us.)",
      },
    ],
  },
];

const diamond_carat_array = [
  {
    height: 14,
    width: 14,
    Carat: 0.5,
  },
  {
    height: 16,
    width: 16,
    Carat: 1,
  },
  {
    height: 18,
    width: 18,
    Carat: 1.5,
  },
  {
    height: 20,
    width: 20,
    Carat: 2,
  },
  {
    height: 22,
    width: 22,
    Carat: 2.5,
  },
  {
    height: 24,
    width: 24,
    Carat: 3,
  },
];

const DiamondsChild = () => {
  const [showFreeShippingTooltip, setShowFreeShippingTooltip] = useState(false);
  const [showReturnTooltip, setShowReturnTooltip] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [position, setPosition] = useState({
    caratPosition: 71, // -5 to 87
    colorPosition: 0, // 0 to 90
    cutPosition: 100,
    clarityPosition: 20, // 0 to 90
  });

  const calculateCaratPosition = (value) => {};
  const calculateColorPosition = (value) => {
    const positionMap = {
      D: 0,
      E: 10,
      F: 20,
      G: 27.5,
      H: 35,
      I: 42.5,
      J: 50,
      K: 70,
      L: 80,
      M: 90,
    };

    const colorPosition = positionMap[value] || 0;
    setPosition({ ...position, colorPosition });
  };

  const calculateCutPosition = (value) => {};
  const calculateClarityPosition = (value) => {};

  // useEffect(() => {
  //   calculateColorPosition("F");
  //   console.log(position);
  // }, []);

  return (
    <>
      {modalToggle && (
        <View360Modal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
        />
      )}
      <div className="mx-auto w-[95%]">
        {/* section-1 of breadcrum */}
        <Breadcrumb />

        <Filter2 />

        {/* section-2 of diamond preview  */}
        <div className=" p-20  min-h-[50vh] w-full">
          <div className=" flex h-[50vh]  w-full">
            <div className="h-full  w-[50%] p-2 flex gap-1   ">
              <div className=" space-y-5  w-[19%]">
                <div className=" h-20 w-20">
                  <img src={Thumb1} />
                </div>
                <div className="  h-20 w-20">
                  <img src={Thumb1} />
                </div>

                <div className=" h-20 w-20">
                  <img src={Thumb1} />
                </div>
              </div>
              <div className="  h-[full] w-[71%]">
                <img className="h-full w-full object-cover" src={sample1} />
                <span
                  // to={data.view360 || "/"}
                  onClick={() => setModalToggle(true)}
                  className="w-full flex justify-center items-center py-3 gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-slate-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                  <span className="text-sm text-slate-400">View 360 °</span>
                </span>
              </div>
            </div>

            <div className="h-full w-[50%] ">
              <div>
                <h1 className="text-3xl mt-6 justify-start flex text-[#7646D7] ">
                  2.09 Carat D-VVS1 Round Cut Diamond
                </h1>
                <span className="">
                  <ul className="flex justify-start gap-4 mt-3  h-5 w-3/5">
                    <li className="">
                      <b className="gap-4 text-gray-500">D</b>
                      <span className="text-gray-400"> Color</span>
                    </li>
                    <li>
                      <b className="text-gray-500">VVS1</b>
                      <span className="text-gray-400"> Calrity</span>
                    </li>
                    <li>
                      <b className="text-gray-500">Excellent</b>
                      <span className="text-gray-400"> Cut</span>
                    </li>
                  </ul>
                </span>
                <div className=" h-5 w-3/5 mt-4  flex    justify-start  underline-offset-2 underline decoration-[#7646D7]">
                  <span className="flex gap-3 justify-start    cursor-pointer ">
                    <svg
                      className=""
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 640 512"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                    </svg>
                    <div className="relative inline-block">
                      <Link
                        // href="javascript:void(0)"
                        className=" text-gray-500 group-hover:text-gray-600 "
                        onMouseEnter={() => setShowFreeShippingTooltip(true)}
                        onMouseLeave={() => setShowFreeShippingTooltip(false)}
                      >
                        {" "}
                        Free shipping,
                        {showFreeShippingTooltip && (
                          <span className="absolute z-10  -top-[5rem] transform -translate-x-1/4 left-0 w-72 p-3 rounded-lg bg-white shadow-md border border-gray-300">
                            <div className="absolute w-4 h-4 aspect-square border-r border-b bg-white  border-gray-300 rotate-45 -top-[-4rem] left-1/2 transform -translate-x-1/2"></div>
                            <span>
                              Offers free express shipping with insurance on all
                              orders.
                            </span>
                          </span>
                        )}
                      </Link>
                    </div>

                    <div className="relative inline-block">
                      <a
                        href="javascript:void(0)"
                        className="text-gray-500 group-hover:text-gray-600 underline-offset-2 underline decoration-[#7646D7] "
                        onMouseEnter={() => setShowReturnTooltip(true)}
                        onMouseLeave={() => setShowReturnTooltip(false)}
                      >
                        Easy 30 Day Return
                        {showReturnTooltip && (
                          <div className="absolute z-10  -top-[8.5rem] transform -translate-x-1/4 left-1/4 w-72 p-3 rounded-lg bg-white shadow-md border border-gray-300">
                            <div className="absolute w-4  mb-32 h-4 aspect-square border-r border-b bg-white  border-gray-300 rotate-45 -top-[-7.3rem] left-1/2 transform -translate-x-1/2"></div>
                            <p className="text-sm  text-black">
                              If for any reason we have not met your
                              expectations, we would gladly refund, replace, or
                              exchange any unworn item(s) received back in our
                              facility within 30 days of receipt.
                            </p>
                          </div>
                        )}
                      </a>
                    </div>
                  </span>
                </div>

                <div className=" mt-4 h-5 w-3/4 ">
                  <div className=" flex gap-2 justify-start items-center">
                    <svg
                      className=""
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      ></path>
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 128v144h96"
                      ></path>
                    </svg>
                    <span className=" text-base">Deliver by:</span>
                    <b>Thursday, December 16</b>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-4xl">$7,521</h1>
                  </div>
                  <div className="bg-[#7646D7] hover:bg-violet-600 h-12 mt-5  w-full">
                    <a
                      className="flex justify-center text-center p-3 text-white "
                      href=""
                    >
                      CHOOSE THIS DIAMOND
                    </a>
                  </div>

                  <div className="h-6 w-full  mt-5">
                    <div className="flex justify-start items-center gap-6 ">
                      <span className="">
                        <a
                          className="flex justify-start items-center gap-3"
                          href="mailto:info@keyideasinfotech.com"
                          target="_blank"
                        >
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-envelope"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                          </svg>
                          <p>Email</p>
                        </a>
                      </span>
                      <span className="">
                        <a
                          className="flex  items-center gap-3"
                          href="tel:+1 617-934-6763"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-telephone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                          </svg>
                          <p> +1 617-934-6763</p>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section - 3 Product Description */}
        <div className="min-h-[70vh] w-full ">
          <div className="h-10 w-full ">
            <p className="text-2xl text-[#242833]">Product Description</p>
          </div>
          <div className="h-5 w-full py-5 flex justify-start items-center">
            <p className="text-[#5B5E66]">
              This 2.03 carat Emerald Diamond F color VS1 clarity has Excellent
              proportions and a diamond grading report from IGI.
            </p>
          </div>

          <div className=" w-full min-h-1/2  ">
            <p className="text-lg py-3 text-[#242833] ">Diamond Information</p>

            <div className=" w-full  flex justify-center items-center gap-12 ">
              <ul className="w-1/2">
                {diamondInformationArray.map((val, index) => {
                  if (index < diamondInformationArray.length / 2) {
                    for (const i in val) {
                      return (
                        <li
                          key={index}
                          className="w-full flex justify-between items-center p-3 text-[#595C64] 
                          even:bg-[#FFFFFF] odd:bg-[#F8F8F8]"
                        >
                          <span className="w-1/2">{i}:</span>
                          <span className="flex justify-start items-center w-1/2">
                            {val[i]}
                          </span>
                        </li>
                      );
                    }
                  }
                })}
              </ul>
              <ul className="w-1/2">
                {diamondInformationArray.map((val, index) => {
                  if (index >= diamondInformationArray.length / 2) {
                    for (const i in val) {
                      return (
                        <li
                          key={index}
                          className="w-full flex justify-between items-center p-3 text-[#595C64] 
                          even:bg-[#FFFFFF] odd:bg-[#F8F8F8]"
                        >
                          <span className="w-1/2">{i}:</span>
                          <span className="flex justify-start items-center w-1/2">
                            {val[i]}
                          </span>
                        </li>
                      );
                    }
                  }
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* section-4 Product Detail Description and visualization */}
        <div
          id="img"
          className=" w-full min-h-[10vh] flex justify-start py-10 items-center gap-10 flex-col "
        >
          {diamondDetailInformationArray?.map((val, index) => {
            return (
              <section key={index} className=" w-full min-h-[40vh] px-20">
                {/* title & value  */}
                <article className="w-full text-center py-5 text-xl ">
                  <p>
                    {val.title}
                    {":"}
                    <span className="text-[#7646D7]"> {val.value}</span>
                  </p>
                </article>

                {/* discription */}
                <article className="w-full text-center text-[#5B5E66] font-sans px-10">
                  {val.discription}
                </article>

                {/* data */}

                {val.title === "Carat Weight" ? (
                  <article className="w-full py-10">
                    <div className="">
                      <ul className=" flex  border-b ">
                        {diamond_carat_array?.map((val, index) => {
                          return (
                            <li className="w-full flex justify-around items-end">
                              <hr className="border  h-1 " />

                              <div className="flex justify-center items-center flex-col gap-3">
                                <img
                                  src={diamond_carat}
                                  width={val.height}
                                  height={val.width}
                                  loading="lazy"
                                  className="diamond_carat"
                                  alt="diamond .25"
                                />
                                <h1>{val.Carat}CT</h1>
                                <span className="h-3 border  "></span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      <Tooltip
                        text="Your Diamond"
                        value={val.value}
                        position={position.caratPosition}
                      />
                    </div>
                  </article>
                ) : val.title === "Color Grade" ? (
                  <article className="w-full h-[25vh] ">
                    <div className="w-full h-full ">
                      <div className="relative h-1/3 w-full border-b border-[#CCCCCC]   flex justify-between items-end">
                        <hr className="border border-[#CCCCCC]  h-3 " />
                        <hr className="border border-[#CCCCCC]  h-3 " />
                        <hr className="border border-[#CCCCCC]  h-3 " />
                        <hr className="border border-[#CCCCCC]  h-3 " />

                        <MiniSlider left={position.colorPosition} top={90} />
                      </div>

                      <ul className="flex h-2/3 w-full bg-[#EBE2FB] bg-gradient-to-r from-white via-blue-byor-color to-blue-byor-color">
                        {val.data.map((val, index) => {
                          return (
                            <>
                              <hr className="border border-[#CCCCCC]  h-3 " />
                              <li
                                key={index}
                                className="text-[#6F6F6F] w-full flex justify-center items-center flex-col bg-transparent"
                              >
                                <span>{val.title}</span>
                                <span>{val.value}</span>
                              </li>
                            </>
                          );
                        })}
                        <hr className="border border-[#CCCCCC]  h-3 " />
                      </ul>
                    </div>
                  </article>
                ) : val.title === "Cut Grade" ? (
                  <article className="w-full py-10 flex gap-10">
                    {val.data.map((val) => {
                      return (
                        <div className="w-full h-full text-[#5B5E66] ">
                          <div className="p-5">
                            <img src={val.image} alt={val.title} />
                          </div>
                          <div className="text-center">
                            <span>{val.title}</span>
                          </div>
                        </div>
                      );
                    })}
                  </article>
                ) : (
                  <article className="w-full h-[25vh] ">
                    <div className="w-full h-full ">
                      <div className="relative h-1/3 w-full border-b border-[#CCCCCC]   flex justify-between items-end">
                        <hr
                          key={index}
                          className="border border-[#CCCCCC]  h-3 "
                        />
                        <hr
                          key={index}
                          className="border border-[#CCCCCC]  h-3 "
                        />
                        <hr
                          key={index}
                          className="border border-[#CCCCCC]  h-3 "
                        />
                        <hr
                          key={index}
                          className="border border-[#CCCCCC]  h-3 "
                        />
                        <hr
                          key={index}
                          className="border border-[#CCCCCC]  h-3 "
                        />
                        <hr
                          key={index}
                          className="border border-[#CCCCCC]  h-3 "
                        />
                        <MiniSlider left={position.clarityPosition} top={90} />
                      </div>
                      <ul className="flex h-2/3 w-full bg-[#EBE2FB] bg-gradient-to-r from-white via-blue-byor-color to-blue-byor-color">
                        {val.data.map((val, index) => {
                          return (
                            <>
                              <hr className="border border-[#CCCCCC]  h-3 " />
                              <li
                                key={index}
                                className="text-[#6F6F6F] w-full flex justify-center items-center flex-col bg-transparent"
                              >
                                <span>{val.title}</span>
                                <span>{val.value}</span>
                              </li>
                            </>
                          );
                        })}
                        <hr className="border border-[#CCCCCC]  h-3 " />
                      </ul>
                    </div>
                  </article>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DiamondsChild;
