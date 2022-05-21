import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const buttonType = props.primary ? "primary" : "secondary";

  return (
    <button
      disabled={props.disabled ? true : false}
      className={["button", buttonType, props.size].join(" ")}
    >
      {props.label}
    </button>
  );
};

export default Button;
