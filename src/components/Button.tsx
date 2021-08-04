import React from "react";

interface Props {
  buttonText: string;
  type?: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className="flex-shrink-0 px-5 py-2 text-sm text-white duration-500 transform rounded bg-primary hover:shadow-none shadow-primaryButton">
      {props.buttonText}
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
};

export default React.memo(Button);
