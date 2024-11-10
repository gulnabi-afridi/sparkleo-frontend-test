import React from "react";

const ComponentWrapper = ({ children, styles = "h-full" }) => {
  return (
    <div className={`w-full ${styles}`}>
      <div className="w-full h-full max-w-[1500px] m-auto ">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
