import Card from "./Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    progressValue: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
};

export const ProgressCard = (args: any) => <Card {...args}></Card>;

ProgressCard.args = {
  title: "Placed Order",
  message: "IN PROGRESS",
  imageObjects: [
    {
      imageSrc:
        "https://designreset.com/cork/ltr/demo4/assets/img/profile-2.jpeg",
    },
    {
      imageSrc:
        "https://designreset.com/cork/ltr/demo4/assets/img/profile-3.jpeg",
    },
    {
      imageSrc:
        "https://designreset.com/cork/ltr/demo4/assets/img/profile-4.jpeg",
    },
    {
      imageSrc: "",
      name: "Aarzoo Khan",
    },
    {
      imageSrc:
        "https://designreset.com/cork/ltr/demo4/assets/img/profile-5.jpeg",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ],
  avatarStackThreshold: 4,
  progressValue: 60,
  className: "border rounded-md shadow-lg font-josefin max-w-md min-w-min",
};
