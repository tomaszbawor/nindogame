import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {ActionBar} from "./index";

export default {
    title: 'Layout/Action Bar',
    component: ActionBar,
} as Meta;

const Template: Story<{}> = () => <ActionBar />;

export const LayoutActionBar = Template.bind({});
LayoutActionBar.args = {
    // ags
};
