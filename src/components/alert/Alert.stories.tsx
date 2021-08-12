import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
};

export const DefaultAlert = (args: any) => <Alert {...args}></Alert>;
DefaultAlert.args = {
  alertText: "Default! This alert has a timeout of 5 secs. You can change it.",
  theme: "primary",
  alertStyle: "default",
  className: "font-josefin pl-4 py-3 rounded-md",
  timeOutMS: 5000,
};

export const OutlinedAlert = (args: any) => <Alert {...args}></Alert>;
OutlinedAlert.args = {
  alertText: "Outlined! This alert has a timeout of 5 secs. You can change it.",
  theme: "primary",
  alertStyle: "outlined",
  className: "font-josefin pl-4 py-3 rounded-md",
  timeOutMS: 5000,
};

export const SolidAlert = (args: any) => <Alert {...args}></Alert>;
SolidAlert.args = {
  alertText: "Solid! This alert has a timeout of 5 secs. You can change it.",
  theme: "primary",
  alertStyle: "solid",
  className: "font-josefin pl-4 py-3 rounded-md",
  timeOutMS: 5000,
};
