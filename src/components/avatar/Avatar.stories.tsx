import Avatar from "./Avatar";
import AvatarStack from "./AvatarStack";

const onlineStatus = { undefined, online: "online", offline: "offline" };
const animate = {
  undefined,
  "Animate-Over-X": "over-x",
  "Animate-Over-Y": "over-y",
};

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    onlineActivity: {
      options: Object.keys(onlineStatus),
      mapping: onlineStatus,
      control: { type: "select" },
    },
    animate: {
      options: Object.keys(animate),
      mapping: animate,
      control: { type: "select" },
    },
  },
};

export const SingleAvatar = (args: any) => <Avatar {...args}></Avatar>;

SingleAvatar.args = {
  imageSrc:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  className:
    "object-cover border-4 border-white bg-auth-primary text-white font-josefin",
  name: "Marie Jain",
  animate: undefined,
  size: "md",
};

export const StackedAvatars = (args: any) => (
  <AvatarStack {...args}></AvatarStack>
);

StackedAvatars.args = {
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
      imageSrc:
        "https://designreset.com/cork/ltr/demo4/assets/img/profile-5.jpeg",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      imageSrc: "",
      name: "Aarzoo Khan",
    },
  ],
  threshold: 4,
  size: "md",
  animate: undefined,
  className:
    "object-cover border-4 border-white bg-auth-primary text-white font-josefin shadow-lg",
};
