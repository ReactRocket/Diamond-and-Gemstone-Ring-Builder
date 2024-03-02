import React, { useState } from "react";
import Card from "./Card";
import View360Modal from "./View360Modal";

const RecentlyViewed = ({ data }) => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      {modalToggle && (
        <View360Modal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
        />
      )}
      <div className="min-h-[10vh] w-full mt-5">
        {data?.length > 0 ? (
          <ul className="grid grid-cols-4 gap-5">
            {data?.map((val, index) => {
              return (
                <li key={index}>
                  <Card data={val} setModalToggle={setModalToggle} />
                </li>
              );
            })}
          </ul>
        ) : (
          <h1 className="text-[#7646D7] text-[52px] font-sans p-10">
            Natural Diamonds
          </h1>
        )}
      </div>
    </>
  );
};

export default RecentlyViewed;
