import React, { Dispatch, useContext, useRef } from "react";
import AppContext from "./AppContext";

const SearchInput: React.FC<{
  loading: boolean;
  searchText: string;
  setSearchText: Dispatch<React.SetStateAction<string>>;
}> = ({ searchText, setSearchText, loading }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { toggleModal } = useContext(AppContext);
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
          defaultValue={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <>
          {loading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          <button
            className="border-[1px] text-[9px] font-medium rounded p-1"
            onClick={() => {
              toggleModal(false);
            }}
          >
            ESC
          </button>
        </>
      </div>
    </div>
  );
};

export default SearchInput;
