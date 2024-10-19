import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  control,
  name,
  type = "text",
  error = "",
  placeholder = "",
  ...rest
}) => {
  const { filed } = useController({
    control,
    name,
    defaultValue: "",
  });
  console.log(error);

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`relative w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 ${
          error.length > 0 ? "border-error" : "border-strock"
        }`}
        placeholder={error.length < 0 ? placeholder : ""}
        {...filed}
        {...rest}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
};

export default Input;
