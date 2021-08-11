import { Switch } from "@headlessui/react";
import React, { SetStateAction } from "react";

interface Props {
  title: string;
  toggleHandler: {
    isOn: boolean;
    setSwitch: React.Dispatch<SetStateAction<boolean>>;
  };
  className?: string;
  theme?: "primary" | "secondary" | "dark";
}

const ToggleSwitch: React.FC<Props> = ({
  title,
  toggleHandler,
  className,
  theme,
}) => {
  let themeClasses = "";
  switch (theme) {
    case "primary":
      themeClasses = " bg-auth-primary ";
      break;
    case "secondary":
      themeClasses = " bg-app-secondary ";
      break;
    case "dark":
      themeClasses = " bg-app-dark ";
  }
  return (
    <div className="flex flex-col items-center sm:flex-row">
      <label className="font-josefin" htmlFor="showPassword">
        {title}
      </label>
      <Switch
        type="button"
        checked={toggleHandler.isOn}
        onChange={() => toggleHandler.setSwitch((value: boolean) => !value)}
        className={
          `${
            toggleHandler.isOn ? themeClasses : "bg-gray-200"
          } relative sm:ml-4 inline-flex flex-shrink-0 items-center shadow-lg hover:shadow-none h-5 rounded-full w-9 transform duration-300` +
          " " +
          className
        }
      >
        <span
          className={`${
            toggleHandler.isOn
              ? "translate-x-5 bg-white"
              : "translate-x-1" + themeClasses
          } inline-block w-3 h-3 transform duration-500 shadow-sm rounded-full`}
        />
      </Switch>
    </div>
  );
};

ToggleSwitch.defaultProps = {
  className: "",
  theme: "primary",
};

export default React.memo(ToggleSwitch);
