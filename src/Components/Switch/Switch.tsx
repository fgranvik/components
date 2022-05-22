import React, { useState } from "react";
import "./Switch.scss";

export interface SwitchProps {
  name: string;
  label?: string;
  onChange?: Function;
  checked: boolean;
  disabled?: boolean;
  value?: string | number;
  size?: "small" | "medium" | "large";
  style?: any;
}

const Switch = (props: SwitchProps) => {
  const disabled = props.disabled ? "disabled" : "";
  const test = props.checked ? "true" : "false";

  return (
    <label
      className={["switch", props.size, test, disabled].join(" ")}
      htmlFor={props.name}
    >
      <input
        style={props.style}
        className="knob"
        type="checkbox"
        id={props.name}
        defaultChecked={props.checked}
        disabled={props.disabled ? true : false}
        value={props.value}
      />
      {props.label}
    </label>
  );
};

export default Switch;
