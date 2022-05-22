import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
  secondary: false,
  disabled: false,
};
