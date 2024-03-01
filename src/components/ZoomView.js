import React, { useEffect } from "react";
import "../resources/css/Global.css";

const ZoomView = ({ data, setZoomViewToggle, zoomViewToggle }) => {
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
  }, [zoomViewToggle]);

  return (
    <div
      id="my-scrollbar"
      className="fixed z-50 top-0 left-0 bg-white min-w-full h-screen overflow-y-scroll p-5"
    >
      {data?.map((val) => {
        return (
          <div
            key={val.id}
            className="border rounded-md h-screen w-full overflow-hidden mb-10"
          >
            <img
              src={val}
              alt={val}
              className="h-full w-full object-contain cursor-zoom-in"
            />
          </div>
        );
      })}

      {/* cancle button  */}
      <button
        className="fixed top-7 right-7 border-2 rounded-full p-2 "
        onClick={() => setZoomViewToggle(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>
    </div>
  );
};

export default ZoomView;
