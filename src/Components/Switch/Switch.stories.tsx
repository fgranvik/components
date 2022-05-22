import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [value, setValue] = useState(false);
  return <Switch onChange={() => setValue(!value)} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  name: "check",
  label: "Switch label",
  checked: false,
  disabled: false,
};
