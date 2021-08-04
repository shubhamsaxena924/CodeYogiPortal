import React, { SetStateAction } from "react";
import { useState } from "react";

interface Props {
  placeholder: string;
  children?: React.ReactElement;
  labelForSR?: string;
  id: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  valueHandler?: {
    value: string;
    valueOf: string;
    setValue: React.Dispatch<SetStateAction<any>>;
  };
}

const InputField: React.FC<Props> = ({ valueHandler, ...props }) => {
  const [isFocussed, setIsFocussed] = useState<boolean>(false);
  return (
    <div
      className={
        (isFocussed ? "border-primary " : "border-gray-200 ") +
        " flex border-b transform duration-300"
      }
    >
      <label className="sr-only" htmlFor={props.id}>
        {props.labelForSR ? props.labelForSR : props.placeholder}
      </label>
      {props.children}
      <input
        id={props.id}
        type={props.type}
        className="w-full p-0 pb-3 placeholder-gray-300 border-0 outline-none focus:ring-0"
        placeholder={props.placeholder}
        onClick={() => setIsFocussed(() => true)}
        onBlur={() => setIsFocussed(() => false)}
        autoComplete={props.autoComplete}
        value={valueHandler?.value}
        onChange={(event) => {
          valueHandler &&
            valueHandler.setValue((obj: any) => ({
              ...obj,
              [valueHandler.valueOf]: event.target.value,
            }));
        }}
        required={props.required}
      />
    </div>
  );
};

InputField.defaultProps = {
  required: false,
};

export default React.memo(InputField);
