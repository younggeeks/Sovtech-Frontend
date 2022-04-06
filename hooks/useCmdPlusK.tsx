import React, { Dispatch, SetStateAction } from "react";

const useCommandKCombo = (
  callback: Dispatch<SetStateAction<boolean>>,
  ref: React.MutableRefObject<HTMLDivElement | null | undefined>
) => {
  const handleClick = (e: KeyboardEvent) => {
    if (
      (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) ||
      e.key === "Meta" ||
      e.key === "Shift" ||
      e.key === "Control" ||
      e.key === "alt"
    ) {
      return;
    }
    if (ref?.current && !ref.current.contains(e.target as Node)) {
      if (e.key === "k" && e.metaKey) {
        callback(true);
      }
    }
  };
  React.useEffect(() => {
    document.addEventListener("keydown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  });
};

export default useCommandKCombo;
