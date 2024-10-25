import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 z-20 w-full bg-white rounded-lg shadow-sm max-h-[300px] top-full overflow-y-auto">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
