import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: IconType;
  iconStylingClasses?: string;
  buttonText: string;
  type: "submit" | "reset" | "button";
  theme?: "primary" | "secondary" | "dark";
  buttonStyle?: "solid" | "outlined" | "default";
}

const Button: React.FC<Props> = ({
  buttonText,
  buttonStyle,
  Icon,
  iconStylingClasses,
  className,
  theme,
  ...rest
}) => {
  let themeClasses: string = "";
  switch (buttonStyle) {
    case "solid":
      switch (theme) {
        case "primary":
          themeClasses =
            " bg-auth-primary shadow-primaryButton text-white hover:shadow-none ";
          break;
        case "secondary":
          themeClasses =
            " bg-app-secondary shadow-secondaryButton text-white hover:shadow-none ";
          break;
        case "dark":
          themeClasses =
            " bg-app-dark shadow-darkButton text-white hover:shadow-none ";
      }
      break;
    case "outlined":
      switch (theme) {
        case "primary":
          themeClasses =
            " border border-auth-primary hover:bg-auth-primary hover:shadow-primaryButton text-auth-primary hover:text-white shadow-none ";
          break;
        case "secondary":
          themeClasses =
            " border border-app-secondary hover:bg-app-secondary hover:shadow-secondaryButton text-app-secondary hover:text-white shadow-none ";
          break;
        case "dark":
          themeClasses =
            " border border-app-dark hover:bg-app-dark hover:shadow-darkButton text-app-dark hover:text-white shadow-none ";
      }
      break;
    case "default":
      switch (theme) {
        case "primary":
          themeClasses =
            " bg-auth-primary bg-opacity-10 text-auth-primary hover:bg-opacity-15 ";
          break;
        case "secondary":
          themeClasses =
            " bg-app-secondary bg-opacity-10  text-app-secondary hover:bg-opacity-15 ";
          break;
        case "dark":
          themeClasses =
            " bg-app-dark bg-opacity-10 text-app-dark hover:bg-opacity-15 ";
          break;
      }
      break;
  }
  return (
    <button
      {...rest}
      className={
        "flex-shrink-0 flex px-5 text-sm  duration-500 transform hover:-translate-y-1 rounded disabled:opacity-50 disabled:cursor-not-allowed " +
        themeClasses +
        " " +
        className
      }
    >
      <div className="flex items-center w-full my-2 justify-evenly">
        {Icon && <Icon className={iconStylingClasses}></Icon>}
        {buttonText}
      </div>
    </button>
  );
};

Button.defaultProps = {
  className: "",
  buttonStyle: "solid",
  theme: "primary",
  iconStylingClasses: "",
};

export default React.memo(Button);
