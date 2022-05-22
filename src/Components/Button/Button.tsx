import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  secondary?: boolean;
  size?: "xSmall" | "small" | "medium" | "large" | "xLarge";
  disabled?: boolean;
  style?: any;
  other?: any;
}

const Button = (props: ButtonProps) => {
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

export default Button;
