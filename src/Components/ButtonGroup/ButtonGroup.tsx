import React from "react";
import "./ButtonGroup.scss";

export interface ButtonGroupProps {
  label?: string;
  secondary?: boolean;
  size?: "xSmall" | "small" | "medium" | "large" | "xLarge";
  disabled?: boolean;
  style?: any;
  other?: any;
}

const ButtonGroup = (props: ButtonGroupProps) => {
  const buttonType = props.secondary ? "secondary" : "primary";

  return (
    <button
      disabled={props.disabled ? true : false}
      className={["button", buttonType, props.size].join(" ")}
      style={props.style}
    >
      {props.label}
    </button>
  );
};

export default ButtonGroup;
