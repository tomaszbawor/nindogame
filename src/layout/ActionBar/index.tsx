import React from "react";
import { LocationMenu } from "../../components/LocationMenu";

export const ActionBar: React.FC<{}> = () => {
  return (
    <div className="col-3">
      <LocationMenu />
    </div>
  );
};
