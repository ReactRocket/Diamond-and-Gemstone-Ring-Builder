import React from "react";
import { useLocation } from "react-router-dom";

export const Error = () => {
  const location = useLocation();

  const path = location.pathname ; 
  return (
    <>
     <h1 className="text-[#7646D7] text-[52px] font-sans p-10">
      {`"${path.slice(1,)}" Not Found`}
    </h1>
    </>
  );
};
