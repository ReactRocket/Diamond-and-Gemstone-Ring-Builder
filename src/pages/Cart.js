import React,{useState} from "react";

export const Cart = () => {
  
    const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative inline-block">
      <span
        className="text-gray-500 group-hover:text-gray-600"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Sanju
      </span>
      {showTooltip && (
        <span className="absolute z-10 w-48 p-1 mt-2 border shadow-sm text-black bg-white">
          Sanju is a good boy
        </span>
      )}
    </div>
  );
};
