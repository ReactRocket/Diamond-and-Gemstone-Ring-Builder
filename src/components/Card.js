import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-200 min-h-screen">
        <div className="bg-white rounded-md shadow-md p-8 w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 max-w-lg">
          <div className="flex items-center justify-center">
            <a href="#">
              <img
                src="https://cdn.shopify.com/extensions/ab08ec47-3b32-47bb-a0ca-6315403a4345/0.0.0/assets/round-icon.png"
                alt="Not Found"
                className=""
              />
            </a>
          </div>

          <div className="h-36 w-full flex justify-center items-center flex-col gap-5">
            <a href="" className="flex justify-center items-center gap-2">
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
            <a href="#" className="text-sm">
              0.37 Carat E-VVSI Round cut Diamond
            </a>
            <p className="text-center">
              <span className="text-purple-600 text-lg">$3,000</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
