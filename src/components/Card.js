import React from "react";

const Card = ({ data }) => {
  return (
    <>
      {/* <div className="flex justify-center items-center  min-h-screen"> */}
      <div className="bg-white border overflow-hidden rounded-md   h-full w-full  ">
        <a href={data.imgLink || "/"}>
          <img
            src={
              data.src ||
              "https://cdn.shopify.com/extensions/d1512217-7f48-4f93-84da-5fa1f302dc36/diamond-ring-builder-jewelry-455/assets/round-icon.png"
            }
            alt="Not Found"
            className="w-full h-[70%]"
          />
        </a>

        <div className="h-[30%] w-full flex flex-col justify-center gap-1 ">
          <a
            href={data.view360 || "/"}
            className="w-full flex justify-center items-center gap-2"
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
          </a>
          <section className="w-full text-sm text-nowrap font-sans text-center">
            {data.title || " 0.37 Carat E-VVSI Round cut Diamond"}
          </section>
          <div className=" display flex  w-full flex-row justify-around  items-center">
            <span>&nbsp;</span>
            <p className="text-center">
              <span className="text-purple-600 text-lg ">
                {data.price || "$3,000"}
              </span>
            </p>
            <a href={data.compairLink || "/"}>
              <img
                src="https://cdn.shopify.com/extensions/ab08ec47-3b32-47bb-a0ca-6315403a4345/0.0.0/assets/comparizon-icon.svg"
                loading="lazy"
                alt="compare"
                width="35"
                height="35"
              />
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;
