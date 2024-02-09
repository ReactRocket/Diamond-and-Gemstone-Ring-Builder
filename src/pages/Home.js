import React from "react";
import serviceImg_1 from "../assets/images/home/services/1.svg";
import serviceImg_2 from "../assets/images/home/services/2.svg";
import serviceImg_3 from "../assets/images/home/services/3.svg";
import serviceImg_4 from "../assets/images/home/services/4.svg";
import serviceImg_5 from "../assets/images/home/services/5.svg";
import serviceImg_6 from "../assets/images/home/services/6.svg";
import serviceImg_7 from "../assets/images/home/services/7.svg";
import serviceImg_8 from "../assets/images/home/services/8.svg";

import Diamond1 from "../assets/images/home/card/Diamond1/Diamond1.webp";
import Diamond1_hover from "../assets/images/home/card/Diamond1/Diamond1_hover.webp";

import Diamond2 from "../assets/images/home/card/Diamond2/Diamond2.webp";
import Diamond2_hover from "../assets/images/home/card/Diamond2/Diamond2_hover.webp";

import Diamond3 from "../assets/images/home/card/Diamond3/Diamond3.webp";
import Diamond3_hover from "../assets/images/home/card/Diamond3/Diamond3_hover.webp";

import Diamond4 from "../assets/images/home/card/Diamond4/Diamond4.webp";
import Diamond4_hover from "../assets/images/home/card/Diamond4/Diamond4_hover.webp";

const servicesListArray = [
  {
    img: serviceImg_1,
    title: "Jewelry Website",
    subTitle: "Clean and clear graphics by UI/UX team",
  },
  {
    img: serviceImg_2,
    title: "Diamond Integration",
    subTitle: "Add Nivoda, RapNet, VDB,and other APIs/CSVs",
  },
  {
    img: serviceImg_3,
    title: "Ring Builder",
    subTitle: "User can create or build his own Engagement Ring",
  },
  {
    img: serviceImg_4,
    title: "Diamond Filter",
    subTitle: "Allows users to select the perfect diamond for their ring",
  },
  {
    img: serviceImg_5,
    title: "Jewelry Retouching",
    subTitle: "Highlight strengths, downplay flaws for customer appeal",
  },
  {
    img: serviceImg_6,
    title: "Jewelry E-commerce",
    subTitle: "Customized solutions for your online jewelry business growth.",
  },
  {
    img: serviceImg_7,
    title: "Jewelry Marketing",
    subTitle: "Marketing and SEO Services to grow business 200%",
  },
  {
    img: serviceImg_8,
    title: "Jewelry Website Pricing",
    subTitle: "Lower Total Cost Of Ownership & Higher Return on Investment  ",
  },
];

const specializationListArray = [
  {
    title: "Brand Identity",
    subTitle: " Crafting unique brand profile",
  },
  {
    title: "Brand Identity",
    subTitle: " Crafting unique brand profile",
  },
  {
    title: "Brand Identity",
    subTitle: " Crafting unique brand profile",
  },
  {
    title: "Brand Identity",
    subTitle: " Crafting unique brand profile",
  },
  {
    title: "Brand Identity",
    subTitle: " Crafting unique brand profile",
  },
  {
    title: "Brand Identity",
    subTitle: " Crafting unique brand profile",
  },
];

const featuredProductsListArray = [
  {
    img: Diamond1,
    hoverImg: Diamond1_hover,
    title: "Shiera Half Bezel Solitaire Engagement Ring",
    price: "$1,100",
  },

  {
    img: Diamond2,
    hoverImg: Diamond2_hover,
    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
  {
    img: Diamond3,
    hoverImg: Diamond3_hover,
    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
  {
    img: Diamond4,
    hoverImg: Diamond4_hover,
    title: "Estelle Channel Set Diamond Engagement Ring",
    price: "$3,200",
  },
];

const Home = () => {
  return (
    <div className="h-full w-full ">
      {/* section -1  */}
      <div
        class=" h-[40vh] w-full bg-cover bg-no-repeat bg-white backdrop-brightness-50"
        style={{
          backgroundImage:
            "URL('//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=3840')",
        }}
      >
        <div class=" w-full h-full  flex  flex-col items-end justify-center gap-3 px-16">
          <button className=" h-1/6 w-1/5 bg-[#7646D7]  hover:bg-[#8357DB]  text-white flex justify-around items-center">
            <a href="" className="text-center">
              {" "}
              Start with a Diamond
            </a>

            <img
              src="//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/diamond.svg?v=565506956968303593"
              width="30px"
              height="30px"
            />
          </button>
          <button className=" h-1/6 w-1/5 bg-[#7646D7] hover:bg-[#8357DB]  text-white flex justify-around items-center">
            <a href="" className="text-center">
              {" "}
              Start with a Ring
            </a>
            <img
              src="//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/ring.svg?v=14615646449345528242"
              width="30px"
              height="30px"
            />
          </button>
        </div>
      </div>

      {/* Section -2 */}

      <div className="  px-16 py-12  min-h-[60vh] w-full">
        {/* <div className="  px-16 py-12 w-full"> */}

        <div className="h-[15%]">
          <h1 className="text-3xl  font-semibold">Featured products</h1>
        </div>
        <div className="mt-4 h-[85%] w-full ">
          <ul className="relative flex gap-6">
            {featuredProductsListArray?.map((val, index) => {
              return (
                <li key={index}>
                  <a href="">
                    <img
                      className="p-3 w-full h-full"
                      src={val.img}
                      alt={val.img}
                      loading="lazy"
                    
                    />
                    
                    <img
                      
                      className="w-1/4 h-full absolute top-0 opacity-0   hover:opacity-100 transition duration-300 ease-in-out"
                      src={val.hoverImg}
                      alt={val.hoverImg}
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                  </a>

                  <div className="text-start">
                    <a href="">
                      <span className="text-sm hover:border-b border-[#7646D7] text-slate-600">
                        {val.title}
                      </span>
                    </a>
                  </div>

                  <div className="text-start">
                    <a href="">
                      <p className="text-slate-900 ">{val.price}</p>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* section-3 */}
      <div className="min-h-[60vh] w-full text-center flex justify-center items-center flex-col  px-5 py-10">
        <h1 className="text-3xl font-bold text-gray-800 pb-10">
          Discover Stunning Jewelry Website Designs – Try Our Services Today!
        </h1>

        <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1  gap-10 p-10">
          {servicesListArray?.map((val, index) => {
            return (
              <li
                key={index}
                className="flex flex-col justify-center items-center gap-3"
              >
                <img
                  src={val.img}
                  alt={val.img}
                  className="cursor-pointer aspect-auto object-cover"
                />
                <h1 className="text-lg font-bold">{val.title}</h1>
                <h2 className="text-sm  text-gray-500 tracking-wider	">
                  {val.subTitle}
                </h2>
              </li>
            );
          })}
        </ul>
      </div>

      {/* section-4 */}
      <div className="min-h-[50vh]  w-full text-center px-5 ">
        <h1 className="text-3xl h-[15vh] font-bold text-gray-800 py-10">
          Keyideas Specialization As Jewelry Web Development Company{" "}
        </h1>

        <ul className="h-[35vh]  w-full grid   grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 p-10">
          {specializationListArray?.map((val, index) => {
            return (
              <li
                key={index}
                className="flex flex-col justify-center items-center  h-full border-2 border-[#7646D7] rounded-lg"
              >
                <h1 className="text-3xl font-semibold bg-[#7646D7] w-full h-1/2 text-white flex justify-center items-center">
                  {val.title}
                </h1>
                <h2 className="text-sm  text-gray-500 bg-transparent h-1/2 tracking-wider flex justify-center items-center	">
                  {val.subTitle}
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
