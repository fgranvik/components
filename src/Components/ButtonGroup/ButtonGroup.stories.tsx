import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
  secondary: false,
  disabled: false,
};
