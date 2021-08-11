import React, { SetStateAction } from "react";
import { FiHome, FiPlay, FiUsers } from "react-icons/fi";
import { logout } from "../../api/login.api";
import Button from "../button/Button";
import SideNavLink from "../sideNavLink/SideNavLink";

interface Props {
  setTitle: React.Dispatch<SetStateAction<string>>;
}

const SideNav: React.FC<Props> = ({ setTitle }) => {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 z-20 flex flex-col items-center justify-between w-16 rounded-tr-lg filter drop-shadow-xl bg-app-primary">
        <div>
          <a href="https://devslane.com" target="_blank" rel="noreferrer">
            <svg
              width="45"
              height="45"
              viewBox="0 0 114 115"
              className="my-3 mr-2 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <g filter="url(#filter1_i)">
                  <path d="M99.6928 34.4992L85.6821 47.8653L47.558 11.4846L58.1971 1.33207C58.6396 0.90976 59.1648 0.57476 59.743 0.346203C60.3212 0.117645 60.9409 7.62939e-06 61.5667 7.62939e-06C62.1925 7.62939e-06 62.8122 0.117645 63.3903 0.346203C63.9685 0.57476 64.4939 0.90976 64.9363 1.33207L99.6928 34.4992Z" />
                </g>
                <g filter="url(#filter2_i)">
                  <path d="M113.988 50.0012V50.0322C113.988 50.0942 113.988 50.1563 113.988 50.2183C113.927 51.3395 113.432 52.3991 112.599 53.1916L101.927 63.375L64.9606 98.651C64.7878 98.8155 64.6033 98.9684 64.4082 99.1084C64.2774 99.1977 64.1418 99.2805 64.002 99.3565L63.7948 99.4689L63.5877 99.5697L63.2708 99.6977C63.1633 99.7386 63.0535 99.7735 62.9418 99.8023C62.0561 100.051 61.1139 100.051 60.2282 99.8023C59.9316 99.7185 59.6445 99.6068 59.3711 99.4689C58.9459 99.2543 58.5569 98.9799 58.2173 98.6549L47.5784 88.4985L87.9366 49.9896L101.947 36.6157L112.611 46.7992C113.444 47.5914 113.94 48.6513 114 49.7725C113.988 49.854 113.988 49.9314 113.988 50.0012Z" />
                </g>
                <g filter="url(#filter3_i)">
                  <path d="M23.3431 39.8681L32.4994 48.6057L57.4172 24.8274L50.4626 18.1908C49.8784 17.6341 49.0865 17.3214 48.2609 17.3214C47.4352 17.3214 46.6433 17.6341 46.0591 18.1908L23.3431 39.8681Z" />
                </g>
                <g filter="url(#filter4_i)">
                  <path d="M14 50.0012V50.0206C14 50.0632 14 50.102 14 50.1408C14.0407 50.8714 14.3634 51.5619 14.9059 52.079L21.8767 58.731L46.051 81.7999C46.1643 81.9059 46.2851 82.0043 46.4126 82.0945C46.4979 82.1526 46.5832 82.2069 46.6725 82.2573L46.8066 82.3349L46.9447 82.3969L47.1559 82.4823C47.2264 82.509 47.2983 82.5323 47.3712 82.5521C47.9087 82.7052 48.4795 82.7165 49.0231 82.5847C49.5668 82.453 50.0628 82.183 50.4585 81.8037L57.4131 75.1673L31.0614 50.009L21.8848 41.2675L14.9099 47.9158C14.3674 48.4329 14.0447 49.1233 14.0041 49.854C14 49.9083 14 49.9546 14 50.0012Z" />
                </g>
                <g filter="url(#filter5_i)">
                  <path d="M104.909 100C109.923 100 113.988 96.121 113.988 91.3361C113.988 86.5511 109.923 82.6721 104.909 82.6721C99.8945 82.6721 95.8296 86.5511 95.8296 91.3361C95.8296 96.121 99.8945 100 104.909 100Z" />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="7.62939e-06"
                  width="114"
                  height="115"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-8" dy="9" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_i"
                  x="47.558"
                  y="7.62939e-06"
                  width="58.1348"
                  height="61.8653"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="6" dy="18" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.6375 0 0 0 0 0.6375 0 0 0 0 0.6375 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
                <filter
                  id="filter2_i"
                  x="47.5784"
                  y="36.6157"
                  width="68.4216"
                  height="67.3734"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="4" />
                  <feGaussianBlur stdDeviation="3.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
                <filter
                  id="filter3_i"
                  x="23.3431"
                  y="10.3214"
                  width="41.074"
                  height="38.2843"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="7" dy="-7" />
                  <feGaussianBlur stdDeviation="3.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
                <filter
                  id="filter4_i"
                  x="14"
                  y="41.2675"
                  width="43.4131"
                  height="48.4084"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="7" />
                  <feGaussianBlur stdDeviation="6" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
                <filter
                  id="filter5_i"
                  x="92.8296"
                  y="80.6721"
                  width="21.1582"
                  height="19.3279"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-3" dy="-2" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0291667 0 0 0 0 0.0291667 0 0 0 0 0.0291667 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          {/* Sidebar nav link */}
          <ul className="flex flex-col items-center mt-8">
            <li>
              <SideNavLink
                Icon={FiHome}
                handleClick={() => {
                  setTitle(() => "Dashboard");
                }}
                to="/dashboard"
              ></SideNavLink>
            </li>
            <li>
              <SideNavLink
                Icon={FiUsers}
                handleClick={() => {
                  setTitle(() => "Groups");
                }}
                to="/groups"
              ></SideNavLink>
            </li>
            <li>
              <SideNavLink
                Icon={FiPlay}
                handleClick={() => {
                  setTitle(() => "Recordings");
                }}
                to="/recordings"
              ></SideNavLink>
            </li>
          </ul>
        </div>
        {/* Sidebar Bottom Actions */}
        <Button
          buttonText="LogOut"
          onClick={logout}
          buttonStyle="outlined"
          type="button"
          className="w-full"
        ></Button>
      </div>
    </>
  );
};

export default React.memo(SideNav);
