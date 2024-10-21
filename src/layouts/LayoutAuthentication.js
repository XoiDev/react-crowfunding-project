import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthentication = ({ children, heading = "" }) => {
  return (
    <div className="relative w-full min-h-screen p-10 dark:bg-darkbg bg-lite isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="hidden lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link className="inline-block mb-5 lg:mb-16" to="/">
        <img srcSet="/logo.png 2x" alt="crowfunding" />
      </Link>
      <div className="max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center dark:text-white lg:text-xl ">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
