import React, { Fragment } from "react";
import { appUITitleSelector } from "../../selectors/appUi.selectors";
import { useAppSelector } from "../../store";

interface Props {
  title?: string;
  isScrolling?: boolean;
}

const TopNav: React.FC<Props> = ({ isScrolling }) => {
  const title = useAppSelector(appUITitleSelector);
  return (
    <>
      <div
        className={
          (isScrolling ? "drop-shadow-sm bg-white " : "bg-app-light-gray ") +
          " sticky top-0 left-0 right-0 z-10 flex items-center justify-between h-16 pl-20 text-xl  filter "
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
