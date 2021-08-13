import { Transition } from "@headlessui/react";
import React, { Fragment, InputHTMLAttributes } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { IconType } from "react-icons";
import { HiExclamationCircle } from "react-icons/hi";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  children?: React.ReactElement;
  labelForSR?: string;
  id?: string;
  name: string; //These are optional in actual input element, so we are explicitly writing them here.
  type: string;
  touched?: boolean;
  className?: string;
  error?: string;
  Icon?: IconType;
  iconStylingClasses?: string;
}

const InputField: React.FC<Props> = ({
  children,
  labelForSR,
  className,
  onBlur,
  Icon,
  iconStylingClasses,
  error,
  touched,
  ...rest
}) => {
  const [isFocussed, setIsFocussed] = useState<boolean>(false);
  const [showToolTip, setShowToolTip] = useState<boolean>(false);

  //useMemos
  const focusHandlerMemo = useMemo(() => {
    return () => setIsFocussed(() => true);
  }, []);
  const blurHandlerMemo = useMemo(() => {
    return (event: any) => {
      setIsFocussed(() => false);
      onBlur && onBlur(event);
    };
  }, [onBlur]);

  return (
    <div className="relative">
      <div
        className={
          (isFocussed ? "border-auth-primary " : "border-gray-200 ") +
          " flex border-b transform duration-300 "
        }
      >
        {rest.id && (
          <label className="sr-only" htmlFor={rest.id}>
            {labelForSR ? labelForSR : rest.placeholder}
          </label>
        )}
        {children}
        {Icon && <Icon className={iconStylingClasses}></Icon>}
        <input
          {...rest}
          className={
            "w-full p-0 pb-3 placeholder-gray-300 bg-transparent border-0 outline-none focus:ring-0 " +
            className
          }
          onClick={focusHandlerMemo}
          onBlur={blurHandlerMemo}
        />
        <Transition
          show={error && touched ? true : false}
          as={Fragment}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="flex items-center mt-1 text-sm transform "
            onMouseEnter={() => {
              setShowToolTip(() => true);
            }}
            onMouseLeave={() => {
              setShowToolTip(() => false);
            }}
          >
            <HiExclamationCircle
              className="inline w-5 h-5 m-1 text-auth-primary animate-bounce"
              aria-hidden="true"
            ></HiExclamationCircle>
            <span
              className={
                (showToolTip ? "sm:visible" : "invisible") +
                " absolute sm:inline-block hidden -right-10 left-7 -top-6 text-center p-2 w-28 md:w-40 rounded-xl rounded-bl-none text-white font-light bg-auth-primary "
              }
            >
              {error}
            </span>
          </div>
        </Transition>
      </div>
      {error && touched && (
        <span className="absolute px-2 pt-1 mt-1 text-xs text-white rounded-md sm:hidden bg-auth-primary">
          {error}
        </span>
      )}
    </div>
  );
};

InputField.defaultProps = {
  required: false,
  iconStylingClasses: "",
};

export default React.memo(InputField);
