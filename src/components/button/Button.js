import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

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
  let defaultClassName =
    "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-20 text-secondary";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );

  return (
    <button
      className={classNames(
        defaultClassName,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
