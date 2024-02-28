import React, { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setFocused(false);
    }
  };

  return (
    <div className="w-[50%]" htmlFor="searchBOX">
      <div
        htmlFor="searchBOX"
        className={`relative flex justify-center items-center border   ${
          focused
            ? "focus:outline-none  focus:border-[#7c3aed]"
            : " border-gray-300"
        } `}
      >
        <label
          className={`absolute left-2 transition-all duration-300 ${
            focused
              ? "top-0 text-gray-600 text-xs"
              : "top-3 text-gray-400 text-sm"
          }`}
        >
          Search
        </label>
        <input
          id="searchBOX"
          type="text"
          className="w-[90%] px-2 py-3 outline-none"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />

        {inputValue !== "" && (
          <button
            className="pr-5 h-full  "
            onClick={() => {
              setInputValue("");
              setFocused(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle fill-gray-400"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        )}
        <hr className="h-full border-r py-4 border-gray-200 " />

        <button className="w-[10%]  h-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
