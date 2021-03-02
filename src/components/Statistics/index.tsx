import React from "react";
import "./Statistics.css";
import { PoolBar } from "../PoolBar";

export const Statistics: React.FC<{}> = () => {
  return (
    <div className="Statistics col-2">
      <h1>Profile</h1>
      <div className="Statistics-Nickname">Nickname</div>
      <img src="https://via.placeholder.com/150" alt="avatar" />
      <PoolBar poolType="Health" currentValue={70} maxValue={100} />
      <PoolBar poolType="Chakra" currentValue={50} maxValue={100} />
      <PoolBar poolType="Stamina" currentValue={30} maxValue={100} />
    </div>
  );
};
