import React from "react";
import "./PoolBar.css";
import { stringify } from "querystring";

type PoolType = "Chakra" | "Stamina" | "Health"

export interface PoolBarProps {
  poolType: PoolType,
  currentValue: number,
  maxValue: number
}

export const PoolBar: React.FC<PoolBarProps> = (props: PoolBarProps) => {
  const { currentValue, poolType, maxValue } = props;
  const barClass = getBarClass(poolType);
  const percent = (currentValue / maxValue) * 100;
  return (
    <div className="PoolBar">
      <div className="PoolBar-label">{poolType}</div>
      <div className="progress">
        <div
          className={`progress-bar ${barClass}`}
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={currentValue}
          aria-valuemin={0}
          aria-valuemax={maxValue}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

const getBarClass = (poolType: PoolType): string => {
  switch (poolType) {
    case "Chakra":
      return "bg-info";
    case "Stamina":
      return "bg-success";
    case "Health":
      return "bg-danger";
  }
};