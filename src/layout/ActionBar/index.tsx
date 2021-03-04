import React from "react";
import { LocationMenu } from "../../components/LocationMenu";

export const ActionBar: React.FC<{}> = () => {
  return (
    <div className="col-2">
      <div className="container">
        <LocationMenu />
      </div>
    </div>
);
};
