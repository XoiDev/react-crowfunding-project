import PropTypes from "prop-types";
import React from "react";

const Label = ({ children, htmlFor = "", className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-start inline-block text-sm font-medium cursor-pointer dark:text-text3 text-text2 ${className}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};
export default Label;
