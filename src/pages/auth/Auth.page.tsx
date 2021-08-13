import React, { useState } from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { User } from "../../models/User";

import LoginPage from "./Login.page";
import SignUpPage from "./SignUp.page";

interface Props {
  onLogin: (user: User)=> void;
}

const AuthPage: React.FC<Props> = (props) => {
  const [isOpening, setIsOpening] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpening(true);
    }, 500);
  }, []);
  return (
    <>
      <div
        className={
          (isOpening ? "lg:w-1/2 " : "") +
          " relative inset-0 flex w-full duration-700"
        }
      >
        <div className="flex items-center justify-center flex-1 py-16 text-gray-700">
          <Route path="/login">
            <LoginPage onLogin={props.onLogin}/>
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </div>
        <div
          className={
            (isOpening ? "lg:w-1/2 " : "") +
            " fixed top-0 bottom-0 right-0 flex items-center justify-center flex-1 w-0 duration-700 transform bg-auth-secondary"
          }
        >
          <svg
            className="w-4/6 h-4/6"
            viewBox="0 0 126 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <g filter="url(#filter1_i)">
                <path
                  d="M106.693 38.4992L92.6821 51.8653L54.558 15.4846L65.1971 5.33207C65.6396 4.90976 66.1648 4.57476 66.743 4.3462C67.3212 4.11765 67.9409 4.00001 68.5667 4.00001C69.1925 4.00001 69.8122 4.11765 70.3903 4.3462C70.9685 4.57476 71.4939 4.90976 71.9363 5.33207L106.693 38.4992Z"
                  fill="#1C8ADB"
                />
              </g>
              <g filter="url(#filter2_i)">
                <path
                  d="M120.988 54.0012V54.0322C120.988 54.0942 120.988 54.1563 120.988 54.2183C120.927 55.3395 120.432 56.3991 119.599 57.1916L108.927 67.375L71.9606 102.651C71.7878 102.816 71.6033 102.968 71.4082 103.108C71.2774 103.198 71.1418 103.281 71.002 103.357L70.7948 103.469L70.5877 103.57L70.2708 103.698C70.1633 103.739 70.0535 103.773 69.9418 103.802C69.0561 104.051 68.1139 104.051 67.2282 103.802C66.9316 103.718 66.6445 103.607 66.3711 103.469C65.9459 103.254 65.5569 102.98 65.2173 102.655L54.5784 92.4985L94.9366 53.9896L108.947 40.6157L119.611 50.7992C120.444 51.5914 120.94 52.6513 121 53.7725C120.988 53.854 120.988 53.9314 120.988 54.0012Z"
                  fill="#1C8ADB"
                />
              </g>
              <g filter="url(#filter3_i)">
                <path
                  d="M30.3431 43.8681L39.4994 52.6057L64.4172 28.8274L57.4626 22.1908C56.8784 21.6341 56.0865 21.3214 55.2609 21.3214C54.4352 21.3214 53.6433 21.6341 53.0591 22.1908L30.3431 43.8681Z"
                  fill="#166BAA"
                />
              </g>
              <g filter="url(#filter4_i)">
                <path
                  d="M21 54.0012V54.0206C21 54.0632 21 54.102 21 54.1408C21.0407 54.8714 21.3634 55.5619 21.9059 56.079L28.8767 62.731L53.051 85.7999C53.1643 85.9059 53.2851 86.0043 53.4126 86.0945C53.4979 86.1526 53.5832 86.2069 53.6725 86.2573L53.8066 86.3349L53.9447 86.3969L54.1559 86.4823C54.2264 86.509 54.2983 86.5323 54.3712 86.5521C54.9087 86.7052 55.4795 86.7165 56.0231 86.5847C56.5668 86.453 57.0628 86.183 57.4585 85.8037L64.4131 79.1673L38.0614 54.009L28.8848 45.2675L21.9099 51.9158C21.3674 52.4329 21.0447 53.1233 21.0041 53.854C21 53.9083 21 53.9546 21 54.0012Z"
                  fill="#1875BA"
                />
              </g>
              <g filter="url(#filter5_i)">
                <path
                  d="M111.909 104C116.923 104 120.988 100.121 120.988 95.3361C120.988 90.5511 116.923 86.6721 111.909 86.6721C106.894 86.6721 102.83 90.5511 102.83 95.3361C102.83 100.121 106.894 104 111.909 104Z"
                  fill="#135F96"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="7.62939e-06"
                width="126"
                height="126"
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
                <feGaussianBlur stdDeviation="6.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
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
                x="54.558"
                y="4.00001"
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
                x="54.5784"
                y="40.6157"
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
                x="30.3431"
                y="14.3214"
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
                x="21"
                y="45.2675"
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
                x="99.8296"
                y="84.6721"
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
        </div>

        <div className="absolute right-0 m-5 lg:hidden">
          <a href="https://devslane.com" target="_blank" rel="noreferrer">
            <svg
              width="50"
              height="50"
              viewBox="0 0 114 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <g filter="url(#filter1_i)">
                  <path
                    d="M99.6928 34.4992L85.6821 47.8653L47.558 11.4846L58.1971 1.33207C58.6396 0.90976 59.1648 0.57476 59.743 0.346203C60.3212 0.117645 60.9409 7.62939e-06 61.5667 7.62939e-06C62.1925 7.62939e-06 62.8122 0.117645 63.3903 0.346203C63.9685 0.57476 64.4939 0.90976 64.9363 1.33207L99.6928 34.4992Z"
                    fill="#1C8ADB"
                  />
                </g>
                <g filter="url(#filter2_i)">
                  <path
                    d="M113.988 50.0012V50.0322C113.988 50.0942 113.988 50.1563 113.988 50.2183C113.927 51.3395 113.432 52.3991 112.599 53.1916L101.927 63.375L64.9606 98.651C64.7878 98.8155 64.6033 98.9684 64.4082 99.1084C64.2774 99.1977 64.1418 99.2805 64.002 99.3565L63.7948 99.4689L63.5877 99.5697L63.2708 99.6977C63.1633 99.7386 63.0535 99.7735 62.9418 99.8023C62.0561 100.051 61.1139 100.051 60.2282 99.8023C59.9316 99.7185 59.6445 99.6068 59.3711 99.4689C58.9459 99.2543 58.5569 98.9799 58.2173 98.6549L47.5784 88.4985L87.9366 49.9896L101.947 36.6157L112.611 46.7992C113.444 47.5914 113.94 48.6513 114 49.7725C113.988 49.854 113.988 49.9314 113.988 50.0012Z"
                    fill="#1C8ADB"
                  />
                </g>
                <g filter="url(#filter3_i)">
                  <path
                    d="M23.3431 39.8681L32.4994 48.6057L57.4172 24.8274L50.4626 18.1908C49.8784 17.6341 49.0865 17.3214 48.2609 17.3214C47.4352 17.3214 46.6433 17.6341 46.0591 18.1908L23.3431 39.8681Z"
                    fill="#166BAA"
                  />
                </g>
                <g filter="url(#filter4_i)">
                  <path
                    d="M14 50.0012V50.0206C14 50.0632 14 50.102 14 50.1408C14.0407 50.8714 14.3634 51.5619 14.9059 52.079L21.8767 58.731L46.051 81.7999C46.1643 81.9059 46.2851 82.0043 46.4126 82.0945C46.4979 82.1526 46.5832 82.2069 46.6725 82.2573L46.8066 82.3349L46.9447 82.3969L47.1559 82.4823C47.2264 82.509 47.2983 82.5323 47.3712 82.5521C47.9087 82.7052 48.4795 82.7165 49.0231 82.5847C49.5668 82.453 50.0628 82.183 50.4585 81.8037L57.4131 75.1673L31.0614 50.009L21.8848 41.2675L14.9099 47.9158C14.3674 48.4329 14.0447 49.1233 14.0041 49.854C14 49.9083 14 49.9546 14 50.0012Z"
                    fill="#1875BA"
                  />
                </g>
                <g filter="url(#filter5_i)">
                  <path
                    d="M104.909 100C109.923 100 113.988 96.121 113.988 91.3361C113.988 86.5511 109.923 82.6721 104.909 82.6721C99.8945 82.6721 95.8296 86.5511 95.8296 91.3361C95.8296 96.121 99.8945 100 104.909 100Z"
                    fill="#135F96"
                  />
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
        </div>
      </div>
    </>
  );
};

export default React.memo(AuthPage);
