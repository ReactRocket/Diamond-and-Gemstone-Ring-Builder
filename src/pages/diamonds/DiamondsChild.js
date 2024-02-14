import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

import img1 from "../../assets/images/breadcrum_icons/diamond-ring.png";
import img2 from "../../assets/images/breadcrum_icons/diamond.png";
import img3 from "../../assets/images/breadcrum_icons/engagement-ring.png";
import sample1 from "../../assets/images/home/card/ChildDiamond/Sample1.jpg";
import Thumb1 from "../../assets/images/home/card/ChildDiamond/Thumb1.jpg";
import Thumb2 from "../../assets/images/home/card/ChildDiamond/Thumb2.jpg";

import { Link } from "react-router-dom";

const data = [
  {
    number: 1,
    text1: "Choose a",
    text2: "Diamond",
    img: img2,
  },
  {
    number: 2,
    text1: "Choose a",
    text2: "Setting",
    img: img3,
  },
  {
    number: 3,
    text1: "Review",
    text2: "Complete",
    img: img1,
  },
];

const DiamondsChild = () => {
  return (
    <div className="mx-auto w-[90%]">
      <Breadcrumb data={data} />
      <div className="w-full  h-6 mt-8 flex flex-row justify-between  items-center">
        <Link to="/">
          <span className="text-xs underline ">BACK TO COLLECTION</span>
        </Link>
        <Link to="dianmond">
          <span className="text-xs underline">START OVER</span>
        </Link>
        <span>&nbsp;</span>
      </div>
      <div className=" px-20  min-h-[50vh] w-full">
        <div className=" flex h-[50vh]  w-full">
          <div className="h-full  w-[50%] p-2 flex gap-1   ">
            <div className=" space-y-5  w-[19%]">
              <div className=" h-20 w-20">
                <img src={Thumb1} />
              </div>
              <div className="  h-20 w-20">
                <img
                src={Thumb1}
              />
                
              </div>

              <div className=" h-20 w-20">
                <img
                src={Thumb1}
                />
              </div>
            </div>
            <div className="  h-[full] w-[71%]">
              <img className="h-full w-50" src={sample1} />
            </div>
          </div>

          <div className="h-full w-[50%]">
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
                    <b className="text-gray-500" >VVS1</b> 
                    <span className="text-gray-400"> Calrity</span>

                  </li>
                  <li>
                    <b className="text-gray-500">Excellent</b>
                    <span className="text-gray-400">  Cut</span>
                   
                  </li>
                </ul>
              </span>
            <div className=" h-5 w-3/5 mt-4  flex    justify-start">
                <a className="flex gap-3 justify-start border-b-2 border-b-violet-400   cursor-pointer">
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

                  <p className="text-gray-500 "> Free Shipping,</p>
                  <span className="text-gray-500 ">Easy 30 Day Return</span>
                </a>
              </div>
              <div className=" mt-4 h-5 w-3/4">
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
    </div>
  );
};

export default DiamondsChild;
