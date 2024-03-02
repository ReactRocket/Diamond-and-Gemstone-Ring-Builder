import React, { useState } from "react";
import View360Modal from "./View360Modal";
import { Link } from "react-router-dom";

const headerData = [
  "Image",
  "Video",
  "Shape",
  "Carat",
  "Color",
  "Clarity",
  "Cut",
  "Lab",
  "Price",
  "Compare",
  "Details",
];

const productListArray = [
  {
    src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/efb2b7b0-5a28-4b0a-9f85-1fc8c06b542f.jpg",
    title: "2.04 Carat 6E4A7A778 Round Cut Diamond",
    price: "$7,342",
    imgLink: "/diamonds/products",
    view360: "/",
    compairLink: "/",
  },
  {
    src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/efb2b7b0-5a28-4b0a-9f85-1fc8c06b542f.jpg",
    title: "2.04 Carat 6E4A7A778 Round Cut Diamond",
    price: "$7,342",
    imgLink: "/diamonds/products",
    view360: "/",
    compairLink: "/",
  },
  {
    src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/efb2b7b0-5a28-4b0a-9f85-1fc8c06b542f.jpg",
    title: "2.04 Carat 6E4A7A778 Round Cut Diamond",
    price: "$7,342",
    imgLink: "/diamonds/products",
    view360: "/",
    compairLink: "/",
  },
  {
    src: "https://nivoda-images.s3.eu-west-2.amazonaws.com/efb2b7b0-5a28-4b0a-9f85-1fc8c06b542f.jpg",
    title: "2.04 Carat 6E4A7A778 Round Cut Diamond",
    price: "$7,342",
    imgLink: "/diamonds/products",
    view360: "/",
    compairLink: "/",
  },
];
const TableView = ({ header, data }) => {
  const [modalToggle, setModalToggle] = useState(false);
  return (
    <>
      {modalToggle && (
        <View360Modal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
        />
      )}
      <table className="h-full mt-5  w-full ">
        <thead className="h-[7vh] bg-[#EFEFEF] text-[#6F6F6F]">
          <tr>
            {headerData.map((val) => {
              return <th key={val}>{val}</th>;
            })}
          </tr>
        </thead>
        <tbody className=" bg-white">
          {productListArray?.map((product) => {
            return (
              <tr
                key={product.id}
                className="w-full h-[10vh]  border-b hover:bg-[#EBE2FB] cursor-auto"
              >
                <td className="h-full flex justify-center items-center ">
                  <img
                    className="w-20  object-contain "
                    src={product.src}
                    alt=""
                  />
                </td>
                <td className="h-full align-middle ">
                  <span
                    className="flex justify-center items-center gap-2 cursor-pointer"
                    onClick={() => setModalToggle(true)}
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
                    <span className="text-sm text-slate-400">View </span>
                  </span>
                </td>
                <td className="h-full text-center ">{product.shape || "-"}</td>
                <td className="h-full text-center ">{product.carat || "-"}</td>
                <td className="h-full text-center ">{product.color || "-"}</td>
                <td className="h-full text-center ">
                  {product.clarity || "-"}
                </td>
                <td className="h-full text-center ">{product.cut || "-"}</td>
                <td className="h-full text-center ">{product.lab || "-"}</td>
                <td className="h-full text-center ">{product.price || "-"}</td>
                <td className="h-full  text-center ">
                  <span className="flex justify-center items-center">
                    {product.compare || (
                      <img
                        src="https://cdn.shopify.com/extensions/ab08ec47-3b32-47bb-a0ca-6315403a4345/0.0.0/assets/comparizon-icon.svg"
                        loading="lazy"
                        alt="compare"
                        width="35"
                        height="35"
                        className="cursor-pointer focus:fill-purple-600"
                      />
                    )}
                  </span>
                </td>
                <td className="text-center ">
                  <Link
                    to="/diamonds/products"
                    className="flex justify-center items-center gap-2 "
                  >
                    <span>Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableView;
