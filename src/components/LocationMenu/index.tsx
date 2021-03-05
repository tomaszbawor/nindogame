import React from "react";
import * as Icon from "react-bootstrap-icons";
import "./LocationMenu.scss";

export const LocationMenu: React.FC<{}> = () => {
  return (
    <div className="location-menu">
      <div className="location-menu-top">
        <button type="button">
          <Icon.HouseFill />
        </button>
        <button type="button">
          <Icon.CompassFill />
        </button>
        <button type="button">
          <Icon.Basket2Fill />
        </button>
        <button type="button">
          <Icon.BookFill />
        </button>
        <button type="button">
          <Icon.InboxesFill />
        </button>
      </div>
      <div className="location-menu-content">
        Content, here there will be submenu.
      </div>
      <div className="location-menu-bottom">
        <button type="button">
          <Icon.HouseFill />
        </button>
        <button type="button">
          <Icon.CompassFill />
        </button>
        <button type="button">
          <Icon.Basket2Fill />
        </button>
        <button type="button">
          <Icon.BookFill />
        </button>
        <button type="button">
          <Icon.InboxesFill />
        </button>
      </div>
    </div>
  );
};