import React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./LocationMenu.scss"

export const LocationMenu: React.FC<{}> = () => {
  return (
    <div className="location-menu">
      <div className="location-menu-top">
        <div className="location-menu-element">
          <Icon.HouseFill />
        </div>
        <div className="location-menu-element">
          <Icon.CompassFill />
        </div>
        <div className="location-menu-element">
          <Icon.Basket2Fill />
        </div>
        <div className="location-menu-element">
          <Icon.BookFill />
        </div>
        <div className="location-menu-element">
          <Icon.InboxesFill />
        </div>
      </div>
      <div className="location-menu-content">
        Content, here there will be submenu.
      </div>
    </div>
  );
};