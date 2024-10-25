import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const {
    control,
    name,
    placeholder = "",
    children,
    className = "",
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className={`"w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none outline-none h-full min-h-[141px] ${className}`}
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
