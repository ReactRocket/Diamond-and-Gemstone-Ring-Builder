import React, { useEffect } from "react";

const View360Modal = ({ modalToggle, src, setModalToggle }) => {
  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";

    const handleBodyOverflow = () => {
      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.scrollBehavior = "smooth";
    };

    return () => {
      handleBodyOverflow();
    };
  }, [modalToggle]);

  return (
    <div className="z-30 fixed top-0 h-screen w-screen bg-gray-900 bg-opacity-50 flex justify-center items-center ">
      <div className="z-50 h-[80%] w-[55%] rounded-xl bg-white">
        <div className="w-full h-[5%] pt-5  flex justify-end items-center px-5 ">
          <img
            onClick={() => setModalToggle && setModalToggle(false)}
            src="https://cdn.shopify.com/extensions/ab08ec47-3b32-47bb-a0ca-6315403a4345/0.0.0/assets/cancel.svg"
            className="cursor-pointer"
            loading="lazy"
            alt="cancel"
            width="25"
            height="25"
          />
        </div>
        <div className="w-full h-[5%]  flex justify-center items-center">
          <h1 className="text-2xl">Actual Diamond 360° Video</h1>
        </div>
        <div class="w-full h-[90%] py-10 flex justify-center items-center px-16 ">
          <iframe
            src={
              src ||
              "https://loupe360.com/diamond/5231046431/video/500/500/true"
            }
            className="h-full w-full object-center "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default View360Modal;
