import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

export default {
  title: "ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {},
};

export const Toggle = (args: any) => {
  const [isOn, setIsOn] = useState(false);
  const toggleHandler = {
    isOn: isOn,
    setSwitch: setIsOn,
  };
  console.log(isOn);
  return (
    <>
      <ToggleSwitch toggleHandler={toggleHandler} {...args}></ToggleSwitch>
      <span className="block w-16 p-1 m-4 leading-9 text-center bg-opacity-75 border rounded-md font-josefin">
        {isOn ? "true" : "false"}
      </span>{" "}
    </>
  );
};

Toggle.args = {
  title: "Show Password",
  className: "",
  theme: "primary",
};
