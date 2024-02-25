import React from "react";

import Breadcrumb from "../../components/Breadcrumb";


const Engagement = ({data}) => {
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
