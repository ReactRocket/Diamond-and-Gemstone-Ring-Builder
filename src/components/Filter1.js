import React, { useState } from "react";

const Filter1 = () => {
 

  
  return (
    <>
      <div
        className="h-[8%] w-full  flex p-2"
       
      >
        <div className="h-[8%] w-[50%] flex gap-4">
          <label>Filter:</label>
          <details
            className="relative pr-5"
            
            
          >
            <summary className="flex">
              <span className=" cursor-pointer hover:underline text-slate-400 flex gap-2 justify-center items-center">
                {" "}
                Availability
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </summary>
            <div className="min-h-[15vh] w-[50vh]   absolute z-40 mt-5 border-2 border-gray-200">
              <div className="h-[40%] p-5 w-full  border-b border-gray-200">
                <div className=" flex justify-between">
                  <label>0 Selected</label>

                  <button
                    type="reset"
                    className="underline text-indigo-500 flex hover:underline"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="h-[60%] w-full p-4   bg-white ">
                <div className="flex gap-5 hover:underline cursor-pointer">
                  <input className="h-8 w-5" id="checkbox" type="checkbox" />
                  <label className="">In stock (16)</label>
                </div>

                <div className="h-[40%] flex gap-5 w-full bg-white hover:underline cursor-pointer ">
                  <input className="h-8 w-5" id="checkbox" type="checkbox" />
                  <label className="">In stock (16)</label>
                </div>
              </div>
            </div>
          </details>

          {/* for Price */}
          <details className="relative pr-5 ">
            <summary className="flex">
              <span className="text-slate-500 cursor-pointer hover:underline flex gap-2 justify-center items-center">
                {" "}
                Price
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </summary>
            <div className="min-h-[15vh] w-[50vh]   absolute z-40 mt-5 border-2 border-gray-200">
              <div className="h-[40%] p-5 w-full  border-b border-gray-200">
                <div className=" flex justify-between">
                  <label className="text-slate-400">
                    The highest price is $5,900
                  </label>

                  <button
                    type="reset"
                    className="underline text-indigo-500 flex hover:underline"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="h-[60%] w-full p-4  flex gap-5   bg-white ">
                <div className="flex justify-center items-center gap-5 ">
                  <lable>$</lable>{" "}
                  <input
                    className="h-8 w-32 border-2 p-5 border-gray-400 text-start hover:border-gray-500 hover:border-3"
                    id="input"
                    type="number"
                    placeholder="From"
                  />
                </div>

                <div className="h-[40%] flex justify-center items-center gap-5 w-full bg-white ">
                  <lable className="">$</lable>
                  <input
                    className="h-8 w-32 border-2 p-5  border-gray-400 text-start focus:border-black focus:border-2 hover:border-gray-500 hover:border-1"
                    id="input"
                    type="number"
                    placeholder="To"
                  />
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* sort by */}
        <div className="h-[8%] w-[50%] ">
          <div className="h-[8%] w-full  gap-6 flex justify-end ">
            <label>Sort by:</label>
            <select className="focus:border-gray-700 text-slate-400 ">
              <option value="Featured">Featured</option>
              <option value="best-selling" selected="selected">
                Best selling
              </option>
              <option value="title-ascending">Alphabetically, A-Z</option>
              <option value="title-descending">Alphabetically, Z-A</option>
              <option value="price-ascending"> Price, low to high</option>
              <option value="price-descending"> Price, high to low</option>
              <option value="created-ascending"> Date, old to new</option>
              <option value="created-descending"> Date, new to old</option>
            </select>
            <span className="text-slate-400"> 16 products</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter1;
