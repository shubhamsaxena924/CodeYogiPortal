import React, { SetStateAction } from "react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  id: string;
  name: string;
  className?: string;
  valueHandler?: {
    value: boolean;
    setValue: React.Dispatch<SetStateAction<any>>;
  };
}

const CheckBox: React.FC<Props> = ({ valueHandler, ...props }) => {
  return (
    <div className="flex flex-row-reverse items-center justify-center">
      <label htmlFor={props.id} className="font-light text-gray-400">
        {props.label}
      </label>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        checked={props.checked}
        value={props.value}
        className={
          "w-3 h-3 mr-4 bg-gray-200 border-gray-400 rounded cursor-pointer text-primary focus:ring-primary " +
          props.className
        }
        onChange={(event) =>
          valueHandler &&
          valueHandler.setValue((obj: any) => ({
            ...obj,
            [props.name]: !valueHandler.value,
          }))
        }
      />
    </div>
  );
};

export default React.memo(CheckBox);
