import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  size: "xSmall" | "small" | "medium" | "large" | "xLarge";
  secondary?: boolean;
  disabled?: boolean;
  styles?: any;
}

const Button = (props: ButtonProps) => {
  const buttonType = props.secondary ? "secondary" : "primary";

  return (
    <button
      disabled={props.disabled ? true : false}
      className={["button", buttonType, props.size].join(" ")}
      {...props.styles}
    >
      {props.label}
    </button>
  );
};

export default Button;
