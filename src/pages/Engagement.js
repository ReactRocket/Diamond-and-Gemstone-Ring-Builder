import React from "react";
import img1 from "../assets/images/breadcrum_icons/diamond-ring.png";
import img2 from "../assets/images/breadcrum_icons/diamond.png";
import img3 from "../assets/images/breadcrum_icons/engagement-ring.png";

import Breadcrumb from "../components/Breadcrumb";
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

const Engagement = () => {
  return (
    <div className="h-full w-full">
      {/* section 1 */}
      <div>
        <Breadcrumb data={data} />

        <h1 className="text-[#7646D7] text-4xl font-sans p-10">
          Engagement Ring{" "}
        </h1>
      </div>

      {/* section 2 */}
      <div className="w-full h-full bg-red-200">
        {/* for filtter */}
        <div className="h-10 w-full bg-slate-400">
          <div className="px-6 flex gap-1">
            <h1 className="p-2">Filter:</h1>
            <details className="">
              <summary className="">
                <div>
                  <span>Availability</span>
                </div>
                <div className="flex gap-10">
                <div>0 Selected</div>
                <button type="reset" className="text-indigo-500 underline cursor-pointer hover:underline">
                  Reset
                </button>
                </div>
              </summary>
            </details>
          </div>
        </div>
        {/* for img */}
      </div>
    </div>
  );
};

export default Engagement;
