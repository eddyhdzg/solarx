import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: [undefined, "green", "violet"],
      control: { type: "select" },
      table: {
        type: {
          summary: 'undefined | "violet" | "green"',
        },
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Demo = Template.bind({});

Demo.args = {
  children: "Button",
};

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Green = Template.bind({});
Green.args = {
  children: "Button",
  variant: "green",
};
