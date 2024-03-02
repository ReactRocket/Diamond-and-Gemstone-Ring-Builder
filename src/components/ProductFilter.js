import React from "react";

const ProductFilter = ({
  activeToggle,
  setActiveToggle,
  activeListToggle,
  setActiveListToggle,
}) => {
  return (
    <div className=" w-full min-h-[20vh] flex flex-col gap-10">
      <section className="h-1/2   w-full flex justify-center items-center ">
        <article className="w-1/2 h-full flex justify-start text-[#4A4A4A] items-center gap-10">
          <button
            onClick={() => setActiveToggle(0)}
            className={`p-3  bg-[${
              activeToggle === 0 ? "#EBE2FB" : "#EFEFEF"
            }] `}
          >
            <span>All Diamonds (50)</span>
          </button>
          <button
            onClick={() => setActiveToggle(1)}
            className={`p-3  bg-[${
              activeToggle === 1 ? "#EBE2FB" : "#EFEFEF"
            }] `}
          >
            <span>Recently Viewed (1)</span>
          </button>
          <button
            onClick={() => setActiveToggle(2)}
            className={`p-3  bg-[${
              activeToggle === 2 ? "#EBE2FB" : "#EFEFEF"
            }] `}
          >
            Comparison (0)
          </button>
        </article>

        <article
          style={activeToggle ? { visibility: "hidden" } : {}}
          className="w-1/2  h-full flex justify-end items-center gap-5"
        >
          <button
            onClick={() => setActiveListToggle(0)}
            className={`w-14 aspect-square bg-[${
              activeListToggle === 0 ? "#EBE2FB" : "#EFEFEF"
            }] p-2`}
          >
            <img
              className="aspect-square object-cover"
              src="https://cdn.shopify.com/extensions/0d0cf04f-e3c1-4fff-91e0-5e8724dd4e13/diamond-ring-builder-jewelry-453/assets/grid-view-icon.svg"
              alt=""
            />
          </button>
          <button
            onClick={() => setActiveListToggle(1)}
            className={`w-14 bg-[${
              activeListToggle === 1 ? "#EBE2FB" : "#EFEFEF"
            }] aspect-square p-2`}
          >
            <img
              className="aspect-square object-cover"
              src="https://cdn.shopify.com/extensions/0d0cf04f-e3c1-4fff-91e0-5e8724dd4e13/diamond-ring-builder-jewelry-453/assets/list-view-icon.svg"
              alt=""
            />
          </button>
        </article>
      </section>
      <section className="h-1/2   w-full flex justify-between items-center ">
        <article className="w-1/2  h-full">
          <span>Showing 50 Results</span>
        </article>

        <article
          style={activeToggle ? { visibility: "hidden" } : {}}
          className="w-1/2  h-full flex justify-end items-center gap-5"
        >
          <div className="min-w-1/3  flex justify-center items-center">
            <input
              type="text"
              className="px-2  border-gray-400 border"
              placeholder="Search Diamond Stock"
            />
            <button className="aspect-square p-1 bg-[#7646D7] border-[#7646D7] border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
          <div className="min-w-1/3  flex justify-end items-center gap-2">
            <label className="" htmlFor="sortby">
              Sort By:
            </label>
            <select
              class="sortby border-gray-400 border"
              id="sortby"
              filter_name="orderby"
              name="sortby"
            >
              <option value="Orderbyupdatedate-desc">Best Match</option>
              <option value="Orderbydate-desc">Latest</option>
              <option value="Orderbyprice-asc">Price: Low to High</option>
              <option value="Orderbyprice-desc">Price: High to Low</option>
              <option value="Orderbycarat-asc">Carat: Low to High</option>
              <option value="Orderbycarat-desc">Carat: High to Low</option>
              <option value="Orderbycolor-asc">Color: Low to High</option>
              <option value="Orderbycolor-desc">Color: High to Low</option>
              <option value="Orderbyclarity-asc">Clarity: Low to High</option>
              <option value="Orderbyclarity-desc">Clarity: High to Low</option>
              <option value="Orderbycut-asc">Cut: Low to High</option>
              <option value="Orderbycut-desc">Cut: High to Low</option>
            </select>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProductFilter;
