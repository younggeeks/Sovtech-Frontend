import React from "react";

const SearchResultRow: React.FC<{ title: string; header?: boolean }> = ({
  title,
  header = false,
}) => {
  if (header) {
    return (
      <div className="font-bold border-b">
        <div className="py-4 px-5 font-medium">{title}</div>
      </div>
    );
  }
  return (
    <div className="py-3 px-2 hover:bg-slate-200 cursor-pointer mx-4 my-3 rounded-lg transition-all duration-500">
      {title}
    </div>
  );
};

export default SearchResultRow;
