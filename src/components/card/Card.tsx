import React from "react";
import AvatarStack from "../avatar/AvatarStack";
import ProgressBar from "../progressBar/ProgressBar";

interface Props {
  title: string;
  message: string;
  imageObjects: { imageSrc: string; alt?: string; name?: string }[];
  avatarStackThreshold: number;
  progressValue: number;
  className: string;
}

const Card: React.FC<Props> = ({
  title,
  message,
  imageObjects,
  progressValue,
  avatarStackThreshold,
  className,
}) => {
  return (
    <>
      <div className={className + " p-6  flex flex-col "}>
        <div className="flex items-center justify-between mb-6">
          <span>{title}</span>
          <div className="static px-2 py-1 pt-2 text-xs duration-700 transform rounded-md hover:-translate-y-1 bg-auth-primary bg-opacity-10 text-auth-primary">
            {message}
          </div>
        </div>
        <AvatarStack
          imageObjects={imageObjects}
          size="sm"
          threshold={avatarStackThreshold}
          className="object-cover text-white border-4 border-white shadow-lg bg-auth-primary font-josefin"
        ></AvatarStack>
        <div className="my-6 space-y-2">
          <div className="w-10 ml-auto text-sm text-auth-primary">
            {progressValue + "%"}
          </div>
          <ProgressBar percentage={progressValue} size="sm"></ProgressBar>
        </div>
      </div>
    </>
  );
};

export default React.memo(Card);
