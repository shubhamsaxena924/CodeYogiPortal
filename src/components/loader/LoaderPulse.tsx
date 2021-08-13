import React from "react";

interface Props {
  transparent?: boolean;
}

const LoaderPulse: React.FC<Props> = (props) => {
  return (
    <div
      className={
        " absolute inset-0 z-50 " +
        (!props.transparent && "bg-opacity-50 bg-white ")
      }
    >
      <div className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-auth-primary left-1/2 top-1/2 animate-pulse"></div>
    </div>
  );
};

LoaderPulse.defaultProps = {
  transparent: false,
};

export default React.memo(LoaderPulse);
