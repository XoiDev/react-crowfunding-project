import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, name, type = "text", ...rest }) => {
  const { filed } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className="w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4"
        {...filed}
        {...rest}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default Input;
