import { Switch } from "@headlessui/react";
import React, { SetStateAction } from "react";

interface Props {
  title: string;
  toggleHandler: {
    isOn: boolean;
    setSwitch: React.Dispatch<SetStateAction<boolean>>;
  };
  className?: string;
}

const ToggleSwitch: React.FC<Props> = ({ title, toggleHandler, className }) => {
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
            toggleHandler.isOn ? "bg-auth-primary" : "bg-gray-200"
          } relative sm:ml-4 inline-flex flex-shrink-0 items-center shadow-lg hover:shadow-none h-5 rounded-full w-9 transform duration-1000` +
          " " +
          className
        }
      >
        <span
          className={`${
            toggleHandler.isOn
              ? "translate-x-5 bg-white"
              : "translate-x-1 bg-auth-primary"
          } inline-block w-3 h-3 transform duration-500 shadow-sm rounded-full`}
        />
      </Switch>
    </div>
  );
};

ToggleSwitch.defaultProps = {
  className: "",
};

export default React.memo(ToggleSwitch);
