import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "./Radio";

export default {
  title: "Components/Inputs/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
  secondary: false,
  disabled: false,
};
