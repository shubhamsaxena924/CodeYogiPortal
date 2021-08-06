import { Transition } from "@headlessui/react";
import React, { Fragment, InputHTMLAttributes } from "react";
import { useState } from "react";
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
}

const InputField: React.FC<Props> = ({
  children,
  labelForSR,
  className,
  onBlur,
  error,
  touched,
  ...rest
}) => {
  const [isFocussed, setIsFocussed] = useState<boolean>(false);
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  return (
    <div>
      <div
        className={
          (isFocussed ? "border-primary " : "border-gray-200 ") +
          " flex border-b transform duration-300 "
        }
      >
        {rest.id && (
          <label className="sr-only" htmlFor={rest.id}>
            {labelForSR ? labelForSR : rest.placeholder}
          </label>
        )}
        {children}
        <input
          {...rest}
          className={
            "w-full p-0 pb-3 placeholder-gray-300 border-0 outline-none focus:ring-0 " +
            className
          }
          onClick={() => setIsFocussed(() => true)}
          onBlur={(event) => {
            setIsFocussed(() => false);
            onBlur && onBlur(event);
          }}
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
            <HiExclamationCircle className="inline w-5 h-5 m-1 text-primary animate-bounce"></HiExclamationCircle>
            <span
              className={
                (showToolTip ? "sm:visible" : "invisible") +
                " absolute sm:inline-block hidden -right-10 left-7 -top-6 text-center p-2 w-28 md:w-40 rounded-xl rounded-bl-none text-white font-light bg-primary "
              }
            >
              {error}
            </span>
          </div>
        </Transition>
      </div>
      {error && touched && (
        <span className="absolute px-2 pt-1 mt-1 text-xs text-white rounded-md sm:hidden bg-primary">
          {error}
        </span>
      )}
    </div>
  );
};

InputField.defaultProps = {
  required: false,
};

export default React.memo(InputField);
