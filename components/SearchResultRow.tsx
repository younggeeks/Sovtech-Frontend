import Link from "next/link";
import React, { useContext } from "react";
import { handleLocalstorage } from "../utils/localstorage";
import AppContext from "./AppContext";

const SearchResultRow: React.FC<{
  title: string;
  header?: boolean;
  url?: string;
}> = ({ title, url, header = false }) => {
  const { toggleModal } = useContext(AppContext);
  if (header) {
    return (
      <div className="font-bold border-b">
        <div className="py-4 px-5 font-medium">{title}</div>
      </div>
    );
  }

  const id = url?.[url.length - 2];
  return (
    <Link href={`/films/${id}`}>
      <a
        onClick={() => {
          handleLocalstorage(title, id);
          toggleModal(false);
        }}
      >
        <div className="py-3 px-2 hover:bg-slate-100 cursor-pointer mx-4 my-3 rounded-lg transition-all duration-500">
          {title}
        </div>
      </a>
    </Link>
  );
};

export default SearchResultRow;
