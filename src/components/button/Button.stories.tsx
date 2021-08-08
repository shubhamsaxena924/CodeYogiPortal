import Button from "./Button";
import { HiLockOpen, HiLockClosed, HiLogin, HiLogout } from "react-icons/hi";

const myIcons = { undefined, HiLockOpen, HiLockClosed, HiLogin, HiLogout };

export default {
  title: "Button",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
    Icon: {
      options: Object.keys(myIcons),
      mapping: myIcons,
      control: {
        type: "select",
        labels: {
          undefined: "No Icon",
          HiLockOpen: "Lock Open",
          HiLockClosed: "Lock Closed",
          HiLogin: "Login",
          HiLogout: "LogOut",
        },
      },
    },
  },
};

export const ButtonDefault = (args: any) => <Button {...args}></Button>;

export const ButtonSolid = (args: any) => <Button {...args}></Button>;

export const ButtonOutlined = (args: any) => <Button {...args}></Button>;

ButtonDefault.args = {
  buttonText: "Edit buttonText",
  disabled: false,
  className: "font-josefin ",
  Icon: ``,
  iconStylingClasses: "mr-2 animate-bounce",
  buttonStyle: "default",
};

ButtonSolid.args = {
  buttonText: "Edit buttonText",
  disabled: false,
  className: "font-josefin ",
  Icon: ``,
  iconStylingClasses: "mr-2 animate-bounce",
  buttonStyle: "solid",
};

ButtonOutlined.args = {
  buttonText: "Edit buttonText",
  disabled: false,
  className: "font-josefin ",
  Icon: ``,
  iconStylingClasses: "mr-2 animate-bounce",
  buttonStyle: "outlined",
};
