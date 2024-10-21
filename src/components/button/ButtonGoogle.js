import React from "react";

const ButtonGoogle = ({
  text = "Or sign up with email",
  onClick = () => {},
}) => {
  return (
    <div>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border dark:border-darkStroke dark:text-white gap-x-3 border-strock rounded-xl text-text2">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>{text}</span>
      </button>
    </div>
  );
};

export default ButtonGoogle;
