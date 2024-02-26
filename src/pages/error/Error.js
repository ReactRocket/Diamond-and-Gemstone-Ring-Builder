import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Error = () => {
  const [Timer, setTimer] = useState(10);
  const location = useLocation();
  const navigate = useNavigate();

  setTimeout(() => {
    setTimer(Timer > 0 && Timer - 1);
  }, 1000);

  useEffect(() => {
    if (Timer === 0) {
      navigate(-1);
    }
  }, [Timer]);

  const path = location.pathname;
  return (
    <>
      <h1 className="text-[#7646D7] text-[52px] font-sans p-10">
        {`"${path.slice(1)}" Page Not Found`}
      </h1>
      <h2 className="text-[#7646D7] text-lg font-sans p-10">
        Redirecting in <b> ({Timer}) </b> seconds to the previous page...
      </h2>
    </>
  );
};
