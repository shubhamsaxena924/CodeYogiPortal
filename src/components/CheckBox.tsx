import React from "react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  id: string;
  name: string;
  className?: string;
}

const CheckBox: React.FC<Props> = ({ label, className, ...rest }) => {
  return (
    <div className="flex flex-row-reverse items-center justify-center">
      <label htmlFor={rest.id} className="font-light text-gray-400">
        {label}
      </label>
      <input
        {...rest}
        type="checkbox"
        className={
          "w-3 h-3 mr-4 bg-gray-200 border-gray-400 rounded cursor-pointer text-auth-primary focus:ring-auth-primary " +
          className
        }
      />
    </div>
  );
};

export default React.memo(CheckBox);
