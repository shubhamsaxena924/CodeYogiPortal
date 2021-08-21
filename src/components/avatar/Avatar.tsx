import React, { useState } from "react";
import { useMemo } from "react";

export interface Props {
  imageSrc?: string;
  alt?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  name?: string;
  onlineActivity?: "online" | "offline";
  animate?: "over-x" | "over-y";
}

const Avatar: React.FC<Props> = ({
  imageSrc,
  alt,
  className,
  size,
  name,
  animate,
  onlineActivity,
}) => {
  const [isError, setIsError] = useState(false);
  let sizeClass: string = "";
  let statusSizeClass: string = "";
  switch (size) {
    case "sm": {
      sizeClass = " h-12 w-12 text-xs ";
      statusSizeClass = " w-2 h-2 border-2 right-0.5 ";
      break;
    }
    case "md": {
      sizeClass = " h-14 w-14 text-sm ";
      statusSizeClass = " w-3 h-3 border-2 right-0.5 ";
      break;
    }
    case "lg": {
      sizeClass = " h-16 w-16 ";
      statusSizeClass = " w-4 h-4 border-2 right-0.5 ";
      break;
    }
    case "xl": {
      sizeClass = " h-24 w-24 text-xl ";
      statusSizeClass = " w-5 h-5 border-4 right-1 ";
      break;
    }
  }

  //useMemos
  const errorHandlerMemo = useMemo(() => {
    return () => setIsError(() => true);
  }, []);

  const nameList = name!.split(" ");
  const nameDp =
    nameList[0].charAt(0).toUpperCase() +
    (
      (nameList.length > 1 && nameList[nameList.length - 1].charAt(0)) ||
      nameList[0].charAt(nameList[0].length - 1)
    ).toUpperCase();

  return (
    <div>
      <div
        className={
          (animate &&
            (animate === "over-x"
              ? " hover:translate-x-1 "
              : " hover:-translate-y-1 ")) +
          " relative inline-block flex-shrink-0 duration-300 transform " +
          sizeClass
        }
      >
        {isError || !imageSrc ? (
          <span
            className={
              className +
              " rounded-full flex flex-shrink-0 w-full h-full justify-center items-center "
            }
          >
            {nameDp}
          </span>
        ) : (
          <img
            src={imageSrc}
            alt={alt}
            className={
              className +
              " rounded-full flex-shrink-0 w-full h-full inline-block  "
            }
            onError={errorHandlerMemo}
          />
        )}
        {onlineActivity && (
          <div
            className={
              (onlineActivity === "online" ? "bg-green-600 " : "bg-gray-400 ") +
              statusSizeClass +
              " absolute w-2 h-2 rounded-full bottom-1  box-content border-white "
            }
          ></div>
        )}
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  alt: "Avatar",
  className: "",
  size: "md",
  name: "n/a",
};

export default React.memo(Avatar);
