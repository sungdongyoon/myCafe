import clsx from "clsx";
import React from "react";

const Container = ({ children }) => {
  return (
    <div className="min-h-[100vh] py-40 px-4 sm:px-8 md:px-12 flex flex-col items-center">
      {children}
    </div>
  );
};

export default Container;
