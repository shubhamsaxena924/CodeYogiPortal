import InputField from "./InputField";
import { BiUser, BiLockAlt, BiLock, BiLockOpen, BiSave } from "react-icons/bi";
import { SiMailDotRu } from "react-icons/si";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { IconType } from "react-icons/lib";

const icons = {
  undefined,
  BiUser,
  SiMailDotRu,
  BiLockAlt,
  BiLock,
  BiLockOpen,
  BiSave,
};
export default {
  title: "Form Input",
  component: InputField,
  argTypes: {
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: "select" },
    },
  },
};

export const Input = (args: any) => {
  const [touched, setTouched] = useState(false);
  return (
    <div className="w-full sm:w-1/2">
      <InputField
        {...args}
        touched={touched}
        onBlur={() => setTouched(!touched)}
      ></InputField>
    </div>
  );
};

export const InputPassword = (args: any) => {
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const EyeIcon: IconType = showPassword ? BsEyeSlash : BsEye;
  return (
    <div className="w-full sm:w-1/2">
      <InputField
        {...args}
        type={showPassword ? "text" : "password"}
        touched={touched}
        onBlur={() => setTouched(!touched)}
      >
        <EyeIcon
          className="absolute right-8 top-1.5"
          onClick={() => setShowPassword((value) => !value)}
        />
      </InputField>
    </div>
  );
};

Input.args = {
  placeholder: "Enter any text",
  id: "MyInput",
  name: "MyInput",
  className: "font-josefin text-sm",
  Icon: BiUser,
  iconStylingClasses: "mx-3 h-5 w-5 text-auth-primary ",
  error: "this field is required",
  type: "text",
};

InputPassword.args = {
  placeholder: "Enter password",
  id: "MyInput",
  name: "MyInput",
  className: "font-josefin text-sm",
  Icon: BiLockAlt,
  iconStylingClasses: "mx-3 h-5 w-5 text-auth-primary ",
  error: "this field is required",
};
