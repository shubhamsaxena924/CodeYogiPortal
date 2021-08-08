import { useState } from "react";
import CheckBox from "./CheckBox";

export default {
  title: "CheckBox",
  component: CheckBox,
};

export const PrimaryCheckBox = (args: any) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckBox
      {...args}
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked);
      }}
    ></CheckBox>
  );
};

PrimaryCheckBox.args = {
  label: "you can edit the checkbox label",
  className: "",
  id: "MyCheckBox",
  name: "MyCheckBox",
};
