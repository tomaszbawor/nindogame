import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {Content} from "./index";

export default {
    title: 'Layout/Content',
    component: Content,
} as Meta;

const Template: Story<{}> = () => <Content />;

export const LayoutContent = Template.bind({});
LayoutContent.args = {
    // ags
};
