import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useMemo } from "react";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";

export interface Props {
  group: { name: string; description: string } | any;
  imageSrc?: string;
  imageAlt?: string;
  isTile?: boolean;
  theme?: "primary" | "secondary" | "dark";
}

const ListCard: React.FC<Props> = ({ isTile, theme, ...props }) => {
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
  const [isError, setIsError] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  //useMemo
  const closeDialogMemo = useMemo(() => {
    return () => setShowDialog(() => false);
  }, []);

  return (
    <div
      className={
        (isTile ? "w-full max-w-5xl " : "w-full md:w-auto ") +
        " items-center m-2.5 bg-white rounded-lg shadow-allSide hover:shadow-2xl transform duration-500 block  sm:flex "
      }
    >
      {isError || !props.imageSrc ? (
        <span
          className={
            (isTile ? "hidden " : "hidden md:flex ") +
            " items-center justify-center flex-shrink-0 w-24 h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40  text-3xl text-white rounded-l-lg" +
            themeClasses
          }
        >
          {props.group.name?.charAt(0).toUpperCase() +
            (props.group.name!.split(" ")[1]?.charAt(0) || "").toUpperCase()}
        </span>
      ) : (
        <img
          className={
            (isTile ? "hidden " : "hidden md:flex ") +
            " items-center justify-center flex-shrink-0 object-cover w-24 h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-l-lg "
          }
          onError={() => setIsError(() => true)}
          src={props.imageSrc}
          alt={props.imageAlt}
        />
      )}
      <span
        className={
          (isTile ? "inline-block " : "inline-block md:hidden ") + " p-2 "
        }
      >
        <Avatar
          imageSrc={props.imageSrc}
          alt={props.imageAlt}
          name={props.group.name}
          className={
            "object-cover text-white border-4 border-white  font-josefin" +
            themeClasses
          }
        ></Avatar>
      </span>
      <div
        className={
          (isTile
            ? "inline-block sm:flex w-full "
            : "md:inline-block sm:flex w-full md:w-48 lg:w-64 ") +
          " items-center justify-between p-2 "
        }
      >
        <h2
          className={
            " font-semibold tracking-wide break-words whitespace-pre-wrap  text-gray-700  lg:text-xl"
          }
        >
          {props.group.name}
        </h2>

        <div className="text-xs tracking-wider text-gray-600 break-words whitespace-pre-wrap md:p-4 ">
          {props.group.description.slice(0, 30) + ".."}
        </div>
      </div>
      <FiInfo
        className="absolute cursor-pointer w-5 h-5 text-gray-300 transform hover:-translate-y-0.5 duration-300 bottom-3 right-3 hover:text-gray-600"
        onClick={() => setShowDialog(true)}
      ></FiInfo>
      <Transition.Root show={showDialog} as={Fragment}>
        <Dialog open={showDialog} onClose={closeDialogMemo}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-70"
            entered="opacity-70"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-70"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-10 transform bg-black"></Dialog.Overlay>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            entered="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed z-20 flex flex-col items-center self-center p-10 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md duration top-1/2 left-1/2 w-80 lg:w-96">
              <Avatar
                imageSrc={props.imageSrc}
                name={props.group.name}
                size="lg"
                className="object-cover text-white border-4 border-white bg-auth-primary font-josefin"
                onlineActivity="online"
              />
              <p className="mt-5 text-sm font-normal text-center text-gray-400 ">
                {"Id: " + props.group.id}
              </p>
              <h3 className="m-2 text-3xl text-center text-gray-500">
                {props.group.name}
              </h3>
              <p className="text-sm font-normal text-center text-gray-400 ">
                {props.group.description}
              </p>
              <p className="mb-10 text-sm font-normal text-center text-gray-400">
                {props.group.join_code}
              </p>
              <Button
                type="button"
                buttonText="Close"
                onClick={closeDialogMemo}
              />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

ListCard.defaultProps = {
  isTile: false,
  theme: "primary",
};

export default React.memo(ListCard);
