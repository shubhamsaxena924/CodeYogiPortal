import React from "react";

interface Props {
  percentage: number;
  theme?: "primary" | "secondary" | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  showValue?: boolean;
  isStriped?: boolean;
}

const ProgressBar: React.FC<Props> = ({
  percentage,
  size,
  className,
  showValue,
  isStriped,
  theme,
}) => {
  if (percentage < 0) {
    console.error("Warning! Percentage value less than 0!");
    percentage = 0;
  } else if (percentage > 100) {
    console.error("Warning! Percentage value greater than 100!");
    percentage = 100;
  }
  let sizeClass: string = "";
  switch (size) {
    case "xs": {
      sizeClass = "h-1 ";
      break;
    }
    case "sm": {
      sizeClass = "h-2 ";
      break;
    }
    case "md": {
      sizeClass = "h-4 text-xs ";
      break;
    }
    case "lg": {
      sizeClass = "h-5 text-sm ";
      break;
    }
    case "xl": {
      sizeClass = "h-6 text-base ";
      break;
    }
  }
  let themeClasses: string = "";
  switch (theme) {
    case "primary": {
      themeClasses = " bg-auth-primary ";
      break;
    }
    case "secondary": {
      themeClasses = " bg-app-secondary ";
      break;
    }
    case "dark": {
      themeClasses = " bg-app-dark ";
      break;
    }
  }
  console.log(sizeClass);
  return (
    <>
      <div className="w-full bg-gray-100 rounded-full shadow-inner ">
        <div
          className={
            sizeClass +
            " rounded-full text-white transform duration-700   " +
            className +
            themeClasses
          }
          style={{
            width: percentage + "%",
            backgroundImage: isStriped
              ? "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)"
              : undefined,
            backgroundSize: "1rem 1rem",
          }}
        >
          {showValue && size !== ("sm" || "xs") && (
            <span className="block w-full text-center">{percentage + "%"}</span>
          )}
        </div>
      </div>
    </>
  );
};

ProgressBar.defaultProps = {
  size: "md",
  className: "",
  showValue: false,
  theme: "primary",
};

export default React.memo(ProgressBar);
