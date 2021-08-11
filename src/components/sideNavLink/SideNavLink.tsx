import React from "react";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";
import { NavLink, NavLinkProps } from "react-router-dom";

interface Props extends NavLinkProps {
  Icon: IconType;
  handleClick: MouseEventHandler<HTMLAnchorElement>;
}

const SideNavLink: React.FC<Props> = ({ Icon, to, handleClick }) => {
  return (
    <>
      <NavLink
        activeClassName="bg-opacity-20 text-white bg-white shadow-allSide rounded-md "
        to={to}
        className="inline-block p-2 text-white text-opacity-80 hover:text-opacity-100"
        onClick={handleClick}
      >
        <Icon className="w-5 h-5"></Icon>
      </NavLink>
    </>
  );
};

export default React.memo(SideNavLink);
