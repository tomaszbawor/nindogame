import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Statistics } from "./index";

export default {
  title: "Layout/Statistics",
  component: Statistics,
} as Meta;

const Template: Story<{}> = () => {
  return (
    <div className="container">
      <div className="row">
        <Statistics />
      </div>
    </div>
  );
};
export const LayoutStatistics = Template.bind({});
LayoutStatistics.args = {
  // ags
};
