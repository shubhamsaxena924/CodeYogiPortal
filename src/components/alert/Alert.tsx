import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useMemo } from "react";
import { MdCancel } from "react-icons/md";

interface Props {
  alertText: string;
  theme?: "primary" | "secondary" | "dark";
  alertStyle?: "default" | "outlined" | "solid";
  className?: string;
  timeOutMS: number;
}

const Alert: React.FC<Props> = ({
  alertText,
  alertStyle,
  theme,
  className,
  timeOutMS,
}) => {
  let themeClasses: string = "";
  switch (alertStyle) {
    case "default":
      switch (theme) {
        case "primary":
          themeClasses =
            " bg-auth-primary bg-opacity-10 text-auth-primary hover:bg-opacity-15 ";
          break;
        case "secondary":
          themeClasses =
            " bg-app-secondary bg-opacity-10  text-app-secondary hover:bg-opacity-15 ";
          break;
        case "dark":
          themeClasses =
            " bg-app-dark bg-opacity-10 text-app-dark hover:bg-opacity-15 ";
          break;
      }
      break;
    case "outlined":
      switch (theme) {
        case "primary":
          themeClasses =
            " border border-auth-primary hover:bg-auth-primary bg-white hover:bg-opacity-10 text-auth-primary ";
          break;
        case "secondary":
          themeClasses =
            " border border-app-secondary hover:bg-app-secondary bg-white hover:bg-opacity-10 text-app-secondary  ";
          break;
        case "dark":
          themeClasses =
            " border border-app-dark hover:bg-app-dark bg-white hover:bg-opacity-10 text-app-dark ";
          break;
      }
      break;
    case "solid":
      switch (theme) {
        case "primary":
          themeClasses = " bg-auth-primary hover:bg-opacity-95 text-white ";
          break;
        case "secondary":
          themeClasses = " bg-app-secondary text-white hover:bg-opacity-95 ";
          break;
        case "dark":
          themeClasses = " bg-app-dark text-white hover:bg-opacity-95 ";
          break;
      }
      break;
  }
  const [isVisible, setIsVisible] = useState(true);
  setTimeout(() => {
    setIsVisible(false);
  }, timeOutMS);

  // useMemos
  const alertCloseHandlerMemo = useMemo(() => {
    return () => {
      setIsVisible(() => false);
    };
  }, []);

  return (
    <Transition
      show={isVisible}
      as={Fragment}
      enter="transition-transform duration-700"
      enterFrom="translate-x-full"
      enterTo="-translate-x-10"
      entered="translate-x-0"
      leave="transition-transform duration-700"
      leaveFrom="-translate-x-10"
      leaveTo="translate-x-full"
    >
      <div
        className={
          themeClasses +
          " flex absolute z-50 w-full transform justify-between items-center p-2 " +
          className
        }
      >
        <span>{alertText}</span>
        <button onClick={alertCloseHandlerMemo}>
          <MdCancel className="w-5 h-5"></MdCancel>
        </button>
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  className: "",
};

export default React.memo(Alert);
