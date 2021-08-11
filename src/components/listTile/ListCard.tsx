import React from "react";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import Avatar from "../avatar/Avatar";

export interface Props {
  groupName: string;
  desc: string;
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
            " items-center justify-center flex-shrink-0 w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40  text-3xl text-white rounded-l-lg" +
            themeClasses
          }
        >
          {props.groupName?.charAt(0).toUpperCase() +
            (props.groupName!.split(" ")[1]?.charAt(0) || "").toUpperCase()}
        </span>
      ) : (
        <img
          className={
            (isTile ? "hidden " : "hidden md:flex ") +
            " items-center justify-center flex-shrink-0 object-cover w-28 h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-l-lg "
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
          name={props.groupName}
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
          " items-center justify-between p-4 "
        }
      >
        <h2
          className={
            " font-semibold tracking-wide break-words whitespace-pre-wrap  text-gray-700  lg:text-xl"
          }
        >
          {props.groupName}
        </h2>

        <div className="text-xs tracking-wider text-gray-600 break-words whitespace-pre-wrap md:p-4 ">
          {props.desc.slice(0, 30) + ".."}
        </div>
      </div>
      <FiInfo className="absolute cursor-pointer w-5 h-5 text-gray-300 transform hover:-translate-y-0.5 duration-300 bottom-3 right-3 hover:text-gray-600"></FiInfo>
    </div>
  );
};

ListCard.defaultProps = {
  isTile: false,
  theme: "primary",
};

export default React.memo(ListCard);
