import React from "react";

export interface PoolBarProps {
  poolType: "Chakra" | "Stamina" | "Health"
  currentValue: number,
  maxValue: number
}

export const PoolBar: React.FC<PoolBarProps> = (props: PoolBarProps) => {
  const {currentValue, poolType, maxValue} = props
  return (

    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={currentValue}
        aria-valuemin={0}
        aria-valuemax={maxValue}
      >
        {poolType}
      </div>
    </div>
  );
};