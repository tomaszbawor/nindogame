import React from "react";
import "./Statistics.scss";
import { PoolBar } from "../../components/PoolBar";

export const Statistics: React.FC<{}> = () => {
  return (
    <div className="col-2 statistics ">
      <h1>Profile</h1>
      <div className="statistics-nickname">Nickname</div>
      <img className="statistics-image" src="https://via.placeholder.com/150" alt="avatar" />
      <PoolBar poolType="Health" currentValue={70} maxValue={100} />
      <PoolBar poolType="Chakra" currentValue={50} maxValue={100} />
      <PoolBar poolType="Stamina" currentValue={30} maxValue={100} />
    </div>
  );
};
