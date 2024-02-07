import React from "react";

const Home = () => {
  return (
    <div className="h-full w-full bg-red-700">
      {/* <h1 className="text-[#7646D7] text-[52px] font-sans p-10">Home</h1> */}
      {/* <div className="h-[40vh] w-full bg-slate-900">
       
          
      </div>
      <div className="display flex flex-col items-center justify-end">
            <button className="w-11% h-[5vh] p-2 display flex justify-end  bg-red-400">Start with a Diamond</button>
          </div> */}
      <div class="relative h-[40vh] w-full">
        <img
          src="//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=3840"
          alt=""
          srcset="//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=375 375w, //diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=550 550w, //diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=750 750w, //diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=1100 1100w, //diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=1500 1500w, //diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=1780 1780w, //diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=2000 2000w, //diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=3000 3000w, //diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/banner-image.png?v=1703593688&amp;width=3840 3840w"
          width="3794"
          height="801.9999999999999"
          sizes="100vw"
          fetchpriority="high"
        />
        <div class="absolute bottom-40 w-full flex  flex-col items-end justify-end">
          <button class="w-36% h-[5vh] text-xl hover:bg-purple-500 flex gap-4 mr-32 font-semibold text-slate-100  p-2 bg-purple-600">
            <a href="" className="text-center">
              {" "}
              Start with a Diamond
            </a>
            <span>
              <img
                src="//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/diamond.svg?v=565506956968303593"
                width="30px"
                height="30px"
              />
            </span>
          </button>
          <button class="w-36% h-[5vh]  text-xl  hover:bg-purple-500 flex gap-4 mr-32 font-semibold text-slate-100  p-2 bg-purple-600">
            <a href="" className="text-center">
              {" "}
              Start with a Ring
            </a>
            <span>
              <img
                src="//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/ring.svg?v=14615646449345528242"
                width="30px"
                height="30px"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
