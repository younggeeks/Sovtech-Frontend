import React, { useContext, useRef } from "react";
import useCommandKCombo from "../hooks/useCmdPlusK";
import AppContext from "./AppContext";

const SearchButton = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { toggleModal, showModal } = useContext(AppContext);
  useCommandKCombo(toggleModal, btnRef);

  return (
    <button
      className="flex border-[1px] py-4 px-3 rounded-lg w-full  justify-between items-center text-slate-400  hover:border-slate-300 transition-all text-sm bg-white  mt-5"
      onClick={() => {
        toggleModal(!showModal);
      }}
      ref={btnRef}
    >
      <div className="flex items-center">
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="mr-3 flex-none"
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

        <span>Search films...</span>
      </div>
      <div>⌘K</div>
    </button>
  );
};

export default SearchButton;
