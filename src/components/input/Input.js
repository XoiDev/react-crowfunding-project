// import PropTypes from "prop-types";
// import React from "react";
// import { useController } from "react-hook-form";
// import { withErrorBoundary } from "react-error-boundary";
// import ErrorComponent from "components/common/ErrorComponent";
// const Input = ({
//   control,
//   name,
//   type = "text",
//   error = "",
//   placeholder = "",
//   children,
//   ...rest
// }) => {
//   const { filed } = useController({
//     control,
//     name,
//     defaultValue: "",
//   });
//   console.log(error.length);

//   return (
//     <div className="relative select-none">
//       <input
//         id={name}
//         type={type}
//         className={`relative select-none  w-full px-6 py-4 text-sm bg-transparent font-medium border rounded-xl dark:placeholder:text-text2 dark:text-white placeholder:text-text4  ${
//           error.length > 0
//             ? "border-error text-error"
//             : "border-strock dark:border-darkStroke text-text1"
//         } ${children ? "pr-16" : ""}`}
//         placeholder={error.length <= 0 ? placeholder : ""}
//         {...filed}
//         {...rest}
//       />
//       {error.length > 0 && (
//         <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
//           {error}
//         </span>
//       )}
//       {children && (
//         <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
//           {" "}
//           {children}
//         </span>
//       )}
//     </div>
//   );
// };

// Input.propTypes = {
//   name: PropTypes.string,
//   type: PropTypes.string,
//   control: PropTypes.any.isRequired,
//   error: PropTypes.string,
// };

// export default withErrorBoundary(Input, {
//   FallbackComponent: <ErrorComponent></ErrorComponent>,
// });

import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent ${
          error.length > 0
            ? "border-error"
            : "border-strock dark:border-darkStroke"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
