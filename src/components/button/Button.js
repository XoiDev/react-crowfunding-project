import PropTypes from "prop-types";
import React from "react";

const Button = ({
  type = "button",
  className = "",
  isLoading = false,
  children,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={`min-h-[56px]  rounded-xl text-base font-semibold py-4 flex justify-center text-white items-center ${
        !!isLoading ? "opacity-50" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
export default Button;
