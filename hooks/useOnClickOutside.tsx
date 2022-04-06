import React, { Dispatch, SetStateAction } from "react";

const useClickOutside = (
  callback: Dispatch<SetStateAction<boolean>>,
  ref: React.MutableRefObject<HTMLDivElement | null | undefined>
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref?.current && !ref.current.contains(e.target as Node)) {
      callback(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClickOutside;
