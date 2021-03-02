import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { PoolBar, PoolBarProps } from "./index";

export default {
  title: "Components/PoolBar",
  component: PoolBar,
  argTypes: {
    poolType: {
      control: {
        type: "select",
        options: ["Chakra", "Stamina", "Health"],
      }
    }
  },
} as Meta;

const Template: Story<PoolBarProps> = (poolBarProps) => (
  <PoolBar
    poolType={poolBarProps.poolType}
    currentValue={poolBarProps.currentValue}
    maxValue={poolBarProps.maxValue}
  />
);

export const HealthBar = Template.bind({});
HealthBar.args = {
  poolType: "Health",
  currentValue: 32,
  maxValue: 50,
};

export const ChakraBar = Template.bind({});
ChakraBar.args = {
  poolType: "Chakra",
  currentValue: 32,
  maxValue: 100,
};


export const StaminaBar = Template.bind({});
StaminaBar.args = {
  poolType: "Stamina",
  currentValue: 760,
  maxValue: 1000,
};


