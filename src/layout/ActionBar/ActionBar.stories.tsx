import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { ActionBar } from "./index";
import "./ActionBar.css";

export default {
  title: "Layout/Action Bar",
  component: ActionBar,
} as Meta;

const Template: Story<{}> = () => (
  <div className="container">
    <div className="row">
      <ActionBar />
    </div>
  </div>
);

export const LayoutActionBar = Template.bind({});
LayoutActionBar.args = {
  // ags
};
