import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
}

const Button: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        "flex-shrink-0 px-5 py-2 text-sm text-white duration-500 transform rounded bg-auth-primary disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-none shadow-primaryButton" +
        className
      }
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
