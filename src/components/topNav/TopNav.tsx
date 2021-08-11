import React from "react";

interface Props {
  title: string;
  isScrolling?: boolean;
}

const TopNav: React.FC<Props> = ({ title, isScrolling }) => {
  return (
    <>
      <div
        className={
          (isScrolling ? "drop-shadow-sm bg-white " : "bg-app-light-gray ") +
          " sticky top-0 left-0 right-0 z-10 flex items-center h-16 pl-20 text-xl  filter "
        }
      >
        <span className="capitalize">{title}</span>
      </div>
    </>
  );
};

TopNav.defaultProps = {
  isScrolling: false,
};

export default React.memo(TopNav);
