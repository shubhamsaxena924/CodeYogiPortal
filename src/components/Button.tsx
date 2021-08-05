import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  type: "submit" | "reset" | "button";
}

const Button: React.FC<Props> = ({ buttonText, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        "flex-shrink-0 px-5 py-2 text-sm text-white duration-500 transform rounded bg-primary disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-none shadow-primaryButton" +
        className
      }
    >
      {buttonText}
    </button>
  );
};

export default React.memo(Button);
