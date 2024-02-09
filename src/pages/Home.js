import React from "react";
import serviceImg_1 from "../assets/images/home/services/1.svg";
import serviceImg_2 from "../assets/images/home/services/2.svg";
import serviceImg_3 from "../assets/images/home/services/3.svg";
import serviceImg_4 from "../assets/images/home/services/4.svg";
import serviceImg_5 from "../assets/images/home/services/5.svg";
import serviceImg_6 from "../assets/images/home/services/6.svg";
import serviceImg_7 from "../assets/images/home/services/7.svg";
import serviceImg_8 from "../assets/images/home/services/8.svg";

import laravel from "../assets/images/home/expertise/laravel.png";
import ablecommerce from "../assets/images/home/expertise/ablecommerce.png";
import microsoft_net from "../assets/images/home/expertise/microsoft-net.png";
import react from "../assets/images/home/expertise/react.png";
import shopify from "../assets/images/home/expertise/shopify.png";
import wordpress from "../assets/images/home/expertise/wordpress.png";

import Qotes from "../assets/images/home/terminology/Qotes.jpg";

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
    title: "Graphics and UI/UX",
    subTitle: "Creating engaging website designs",
  },
  {
    title: "Web Design",
    subTitle: "Building custom jewelry websites",
  },
  {
    title: "E-Commerce Design",
    subTitle: " Perfecting online shopping",
  },
  {
    title: "AR Virtual Try-On",
    subTitle: " Enhancing jewelry shopping with AR",
  },
  {
    title: "Digital Marketing",
    subTitle: "Promoting jewelry brands online",
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
const expertiseListArray = [
  {
    img: wordpress,
  },
  {
    img: laravel,
  },
  {
    img: react,
  },
  {
    img: ablecommerce,
  },
  {
    img: shopify,
  },
  {
    img: microsoft_net,
  },
];

const terminologyListArray = [
  {
    disc: "Keyideas seems to be a world class provider from what we experienced on our first project from the very beginning like scoping out the project requirement, design & development, QA & testing phase and finally to migration to our location.",
    author: "Isaac Gottesman ",
    place: "dimendSCAASI, Chicago",
  },
  {
    disc: "I had an amazing experience working with Keyideas an excellent team of developers! I'm pleased with their service and commitment. They proved that working with them, was a right decision.",
    author: "Mordy Karsch ",
    place: "GivingBack Promotions, San Francisco, CA",
  },
  {
    disc: "The new application was to be used across our offices by senior management at different locations, Keyideas did an excellent work. They clearly understood the requirements and delivered good quality Price Comparison Tool.",
    author: "Rui (Ray) Wang",
    place: " Vestas Group, Denmark",
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
      <div className="min-h-[50vh]  w-full text-center px-5 pb-16">
        <h1 className="text-3xl min-h-[15vh] font-bold text-gray-800 py-10">
          Keyideas Specialization As Jewelry Web Development Company{" "}
        </h1>

        <ul className="min-h-[30vh]  w-full grid   grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 p-7">
          {specializationListArray?.map((val, index) => {
            return (
              <li
                key={index}
                className="flex flex-col justify-center items-center aspect-square  h-full  border border-[#7646D7] rounded-2xl overflow-hidden  "
              >
                <div className="text-xl font-semibold bg-[#7646D7] w-full h-1/2 text-white flex justify-center items-center p-7">
                  <h1 className=" ">{val.title}</h1>
                </div>
                <div className="text-sm  text-gray-500 bg-white h-1/2 tracking-wider flex justify-center items-center p-5">
                  <h2>{val.subTitle}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* section-5 */}
      <div className=" min-h-[30vh] w-full ">
        <div className="h-1/4 w-full  flex justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-700">
            Wide Range of Expertise
          </h1>
        </div>
        <div className="h-3/4 w-full ">
          <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 lg:gap-20 p-10">
            {expertiseListArray?.map((val, index) => {
              return (
                <li key={index} className="flex  justify-center items-center ">
                  <img
                    className="aspect-auto h-1/2"
                    src={val.img}
                    alt={val.img}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* section-6  */}
      <div className=" min-h-[40vh] w-full p-10">
        <ul className="grid h-full w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center place-items-center gap-10">
          {terminologyListArray?.map((val, index) => {
            return (
              <li className="border rounded-3xl border-gray-600 h-3/4 md:w-full  w-3/4  overflow-hidden p-10 text-center flex justify-center items-center flex-col gap-7">
                <div className="h-1/4 w-full flex justify-center items-center">
                  <img
                    src={Qotes}
                    className="h-full aspect-square"
                    alt="Qotes"
                  />
                </div>
                <div className="h-1/2 w-full">{val.disc}</div>
                <div className="h-1/4 w-full font-bold text-xl text-gray-800">
                  <h1> {val.author}</h1>
                  <h1>{val.place}</h1>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
