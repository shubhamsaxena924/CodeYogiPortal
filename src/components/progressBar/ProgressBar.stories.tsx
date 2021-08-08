import ProgressBar from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    size: {
      control: { type: "select" },
    },
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 0.01 },
    },
  },
};

export const Default = (args: any) => <ProgressBar {...args}></ProgressBar>;

Default.args = {
  percentage: 25,
  size: "md",
  className: "font-semibold font-josefin",
  theme: "primary",
  showValue: false,
};

export const Striped = (args: any) => <ProgressBar {...args}></ProgressBar>;

Striped.args = {
  percentage: 25,
  size: "md",
  className: "font-semibold font-josefin",
  isStriped: true,
  theme: "primary",
  showValue: false,
};
