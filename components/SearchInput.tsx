import React, { Dispatch, useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useOnClickOutside";

const SearchInput: React.FC<{
  focusEvent: (e: boolean) => void;
  toggleModal: Dispatch<React.SetStateAction<boolean>>;
}> = ({ focusEvent, toggleModal }) => {
  const ref = useRef<any>();

  return (
    <div className="border-b-[1px] border-gray-100" ref={ref}>
      <div className="flex items-center text-gray-700 px-3 py-4">
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="mr-3 flex-none text-gray-600"
        >
          <path
            d="m19 19-3.5-3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
        </svg>

        <input
          type="text"
          className="bg-white border-none w-full focus:outline-none focus-visible:outline-none placeholder:text-sm placeholder:font-light text-sm h-full"
          placeholder="Search films..."
          onBlur={() => focusEvent(false)}
          onFocus={() => () => {
            focusEvent(true);
          }}
        />
        <button
          className="border-[1px] text-[9px] font-medium rounded p-1"
          onClick={() => {
            toggleModal(false);
          }}
        >
          ESC
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
