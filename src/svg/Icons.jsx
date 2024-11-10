import React from "react";

export const Back = ({
  fill = "none",
  stroke = "",
  className = "w-[24px] h-[24px]",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.71 8.11997L10.83 12L14.71 15.88C15.1 16.27 15.1 16.9 14.71 17.29C14.32 17.68 13.69 17.68 13.3 17.29L8.71 12.7C8.32 12.31 8.32 11.68 8.71 11.29L13.3 6.69997C13.69 6.30997 14.32 6.30997 14.71 6.69997C15.09 7.08997 15.1 7.72997 14.71 8.11997Z"
      fill="#A3AED0"
    />
  </svg>
);
