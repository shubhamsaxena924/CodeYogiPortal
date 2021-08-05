import React, { InputHTMLAttributes, SetStateAction } from "react";
import { useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  children?: React.ReactElement;
  labelForSR?: string;
  id?: string;
  name: string; //These are optional in actual input element, so we are explicitly writing them here.
  type: string;
  className?: string;
  handleChange?: {
    value: string;
    setValue: React.Dispatch<SetStateAction<any>>;
  };
}

const InputField: React.FC<Props> = ({ handleChange, ...props }) => {
  const [isFocussed, setIsFocussed] = useState<boolean>(false);
  return (
    <div
      className={
        (isFocussed ? "border-primary " : "border-gray-200 ") +
        " flex border-b transform duration-300"
      }
    >
      {props.id && (
        <label className="sr-only" htmlFor={props.id}>
          {props.labelForSR ? props.labelForSR : props.placeholder}
        </label>
      )}
      {props.children}
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        className={
          "w-full p-0 pb-3 placeholder-gray-300 border-0 outline-none focus:ring-0 " +
          props.className
        }
        placeholder={props.placeholder}
        onClick={() => setIsFocussed(() => true)}
        onBlur={() => setIsFocussed(() => false)}
        autoComplete={props.autoComplete}
        value={handleChange?.value}
        onChange={(event) => {
          handleChange &&
            handleChange.setValue((obj: any) => ({
              ...obj,
              [props.name]: event.target.value,
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
