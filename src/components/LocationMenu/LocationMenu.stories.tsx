import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { LocationMenu } from "./index";

export default {
  title: "Components/LocationMenu",
  component: LocationMenu,
} as Meta;

const Template: Story<{}> = () => (

  <div className="container">
    <div className="row">
      <div className="col-2">
        <LocationMenu />
      </div>
    </div>
  </div>

);

export const LocationMenuComponent = Template.bind({});
LocationMenuComponent.args = {
  // ags
};



