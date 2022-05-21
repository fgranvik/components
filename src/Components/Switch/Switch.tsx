import React, { useState } from "react";
import "./Switch.scss";

export interface SwitchProps {
  state: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

const Switch = (props: SwitchProps) => {
  // const [state, setState] = useState(props.state)

  const state = props.state ? "true" : "false";
  const disabled = props.disabled ? "disabled" : "";

  const toggleState = () => {
    debugger;
  };

  return (
    <div className={["switch", props.size, state, disabled].join(" ")}>
      <input
        className="state"
        id={`switch`}
        type="checkbox"
        value={state}
        disabled={props.disabled ? true : false}
      />
      <label
        className="knob"
        htmlFor={`switch`}
        onClick={() => toggleState()}
      />
    </div>
  );
};

export default Switch;
