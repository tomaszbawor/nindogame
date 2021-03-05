import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import App from "./App";

export default {
  title: 'Layout/App',
  component: App,
} as Meta;

const Template: Story<{}> = () => <App />;

export const Application = Template.bind({});
Application.args = {
  // ags
};
