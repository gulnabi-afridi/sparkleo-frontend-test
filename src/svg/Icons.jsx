import PropTypes from "prop-types";

export const Back = ({ className = "w-[24px] h-[24px]" }) => (
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

export const Travel = ({ className = "w-[86px] h-[87px]" }) => (
  <svg
    className={className}
    viewBox="0 0 86 87"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5909 77.697H4.28784V57.0909M73.8333 77.697H84.1363C84.1363 76.4455 84.1363 71.5461 84.1363 57.0909M62.2424 35.197H64.8181C71.2575 35.6263 84.1363 40.3485 84.1363 55.803C84.1363 56.2405 84.1363 56.6698 84.1363 57.0909M62.2424 35.197V51.9394C62.2424 53.6566 63.5303 57.0909 68.6818 57.0909C73.8333 57.0909 81.1313 57.0909 84.1363 57.0909M62.2424 35.197H51.9394M51.9394 35.197V51.9394C51.9394 54.0858 50.6515 57.0909 44.2121 57.0909H28.1136M51.9394 35.197H28.1136M4.28784 57.0909V35.197H28.1136M4.28784 57.0909H28.1136M28.1136 35.197V57.0909"
      stroke="white"
      strokeWidth="3.09091"
    />
    <path
      d="M9.43939 35.197L3 19.7424H13.303L21.0303 24.8939H35.197L24.8939 3L36.4849 5.57576L50.6515 26.1818H68.6818C73.404 26.6111 81.5606 29.7879 76.4091 39.0606"
      stroke="white"
      strokeWidth="3.09091"
    />
    <path d="M32.6212 77.697H55.803" stroke="white" strokeWidth="3.09091" />
    <circle
      cx="64.8182"
      cy="76.4091"
      r="8.75758"
      stroke="white"
      strokeWidth="3.09091"
    />
    <circle
      cx="23.606"
      cy="76.4091"
      r="8.75758"
      stroke="white"
      strokeWidth="3.09091"
    />
  </svg>
);

Back.propTypes = {
  className: PropTypes.string,
};

Back.defaultProps = {
  className: "w-[24px] h-[24px]",
};

Travel.propTypes = {
  className: PropTypes.string,
};

Travel.defaultProps = {
  className: "w-[86px] h-[87px]",
};
