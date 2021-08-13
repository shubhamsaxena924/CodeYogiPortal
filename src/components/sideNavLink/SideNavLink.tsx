import React from "react";
import { useState } from "react";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";
import { NavLink, NavLinkProps } from "react-router-dom";

interface Props extends NavLinkProps {
  Icon: IconType;
  handleClick: MouseEventHandler<HTMLAnchorElement>;
  name: string;
}

const SideNavLink: React.FC<Props> = ({ Icon, to, handleClick, name }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <div className="relative">
      <NavLink
        activeClassName="bg-opacity-20 text-white bg-white shadow-allSide rounded-md "
        to={to}
        className="inline-block p-2 text-white text-opacity-80 hover:text-opacity-100"
        onClick={handleClick}
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
      >
        <Icon className="w-5 h-5"></Icon>
      </NavLink>
      <span
        className={
          (showToolTip ? "sm:visible" : "invisible") +
          " absolute left-12 bottom-3 text-xs text-center py-1 px-2 rounded-xl rounded-bl-none text-white bg-gray-900 "
        }
      >
        {name}
      </span>
    </div>
  );
};

export default React.memo(SideNavLink);
