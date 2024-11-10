import React from "react";

const ComponentWrapper = ({ children, styles = "h-full" }) => {
  return (
    <div className={`w-full ${styles}`}>
      <div className="w-full h-full max-w-[1200px] m-auto lg:px-8 px-3">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
