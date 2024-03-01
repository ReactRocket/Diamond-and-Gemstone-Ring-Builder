import React from "react";
import { Link } from "react-router-dom";
import ring1 from "../../src/pages/home/assets/images/card/Diamond1/Diamond1.webp";
import ring2 from "../../src/pages/home/assets/images/card/Diamond1/Diamond1_hover.webp";

const shapes_array = [
  "Round",
  "Oval",
  "Cushion",
  "Radiant",
  "Emerald",
  "Pear",
  "Princess",
  "Asscher",
  "Marquise",
  "Heart",
];

const share = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Share Example",
        text: "Check out this shared content!",
        url: window.location.href,
      })
      
      .catch((error) => {
        console.error("Error sharing:", error);
      });
  } 
  
};

const ProductChild = () => {
  return (
    <>
      <div className="mx-auto w-[95%] px-24">
        <div className="w-full  h-6 py-8 flex flex-row justify-between  items-center">
          <Link to="/diamonds">
            <span className="text-xs underline ">BACK TO COLLECTION</span>
          </Link>
         
          <Link to="/diamonds">
            <span className="text-xs underline ">START OVER</span>
          </Link>
          <span>&nbsp;</span>
        </div>

        <div className="   min-h-[70vh] w-full ">
          <div className=" flex h-full w-full ">
            <div className="h-full  w-[45%]  p-2 flex    ">
              <div className=" gap-2  w-1/5 flex flex-col ">
                <div className="  w-20 border  aspect-square">
                  <img
                    className="h-full w-full object-cover"
                    src={ring1}
                    alt="product image"
                  />
                </div>
                <div className=" w-20 border  aspect-square">
                  <img
                    className="h-full w-full object-cover"
                    src={ring2}
                    alt="product image"
                  />
                </div>{" "}
                <div className=" w-20 border aspect-square">
                  <img
                    className="h-full w-full object-cover"
                    src={ring1}
                    alt="product image"
                  />
                </div>
                <div className=" w-20 border aspect-square">
                  <img
                    className="h-full w-full object-cover"
                    src="//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/360-view-icon.svg?v=9898701996318623333"
                    class="video-360"
                  />
                </div>
              </div>

              {/* main img */}
              <div className="min-h-full w-4/5 border">
                <img
                  className="h-full w-full object-cover"
                  src={ring1}
                  alt="product image"
                />
              </div>
            </div>

            {/* section 2 */}
            <div className="h-full w-[55%] pl-10">
              <h1 className="text-4xl mt-6 justify-start flex flex-col text-[#7646D7] ">
                <p> Shiera Half Bezel Solitaire </p> <p>Engagement Ring</p>
              </h1>

              <div className="flex justify-start gap-4 mt-5  h-5 w-3/5">
                <span className="text-xl">$ 1,110</span>
              </div>

              <div className=" h-5 w-3/5 mt-4  justify-start">
                <span className="text-sm text-slate-400">
                  View With Diamond Shape
                </span>
              </div>

              <div className="grid grid-cols-6 min-h-24 w-full gap-4 mt-5  ">
                {shapes_array.map((val, index) => {
                  return (
                    <button
                      className="w-24  gap-5  border border-violet-500 hover:bg-violet-200 focus:bg-[#8357DB] focus:text-white  flex justify-center items-center  "
                      key={index}
                    >
                      <span className="">{val}</span>
                    </button>
                  );
                })}
              </div>

              <div className=" mt-4 h-full full">
                <div className="bg-[#7646D7] hover:bg-violet-600 h-12 mt-5  w-3/4">
                  <a
                    className="flex justify-center text-center p-3 text-white "
                    href=""
                  >
                    CHOOSE THIS SETTING
                  </a>
                </div>

                <div className="w-full h-full my-5  ">
                  <p className="text-slate-400 font-sans">
                    The ring showcases timeless elegance with its
                    channel-setting creating a seamless and captivating display
                    of sparkling diamonds. The meticulously placed round
                    diamonds, carefully selected for their exceptional
                    brilliance, exude a mesmerizing radiance that delights the
                    senses. Each diamond seamlessly flows into the next, forming
                    a continuous stream of scintillating
                  </p>
                </div>
                <div className="h-10 w-full flex  justify-start items-center">
                  <button className="flex gap-3 justify-center items-center" onClick={share}>
                    <svg
                   
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-upload text-[#7646D7]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    <span className="border-b-2 border-transparent hover:border-b-purple-500 text-[#7646D7] ">
                      Share
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductChild;
