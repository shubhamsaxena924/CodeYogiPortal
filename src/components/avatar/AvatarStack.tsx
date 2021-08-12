import React from "react";
import Avatar from "./Avatar";

interface Props {
  imageObjects: { imageSrc: string; alt?: string; name?: string }[];
  threshold: number;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animate?: "over-x" | "over-y";
}

const AvatarStack: React.FC<Props> = ({
  imageObjects,
  threshold,
  className,
  size,
  animate,
}) => {
  const more = imageObjects.length - threshold;

  const overlapValue: number = size === "xl" ? 8 : 4;
  return (
    <div>
      <span className="flex items-center justify-start filter drop-shadow-lg flex-nowrap">
        {imageObjects
          .slice(
            0,
            imageObjects.length > threshold ? threshold : imageObjects.length
          )
          .map((imageObject, index) => {
            const rightValue = overlapValue * index;
            return (
              <span
                className={" relative inline-block "}
                style={{ right: rightValue / 4 + "rem" }}
              >
                <Avatar
                  imageSrc={imageObject.imageSrc}
                  className={className}
                  alt={imageObject.alt}
                  name={imageObject.name}
                  size={size}
                  animate={animate}
                ></Avatar>
              </span>
            );
          })}
        {more > 0 && (
          <span
            className={
              " relative font-semibold bg-white rounded-full flex-shrink-0 transform hover:-translate-y-1 duration-300 shadow-lg font-josefin text-auth-primary " +
              (size === "xl" ? "text-base py-2 px-4 " : "text-sm py-1 px-2 ")
            }
            style={{ right: (overlapValue * threshold) / 4 + "rem" }}
          >
            {"+" + more + " more"}
          </span>
        )}
      </span>
    </div>
  );
};

export default React.memo(AvatarStack);
