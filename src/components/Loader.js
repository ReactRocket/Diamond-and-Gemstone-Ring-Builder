import React,{useEffect} from "react";

const Loader = ({isLoading}) => {
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
  }, [isLoading]);

  return (
    <div className="z-50 h-full w-screen  bg-opacity-35 fixed top-0 left-0  flex justify-center items-center">
      <span className=" w-[100px] aspect-square border-transparent  rounded-full border-[6px] animate-spin border-t-[#7646D7]"></span>
    </div>
  );
};

export default Loader;
