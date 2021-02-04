import React from "react";

interface Props {
  value: number;
  min: number;
  max: number;
  setValue: (v: number) => void;
}

export const Effecter: React.VFC<Props> = ({ value, min, max, setValue }) => {
  return (
    <p>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </p>
  );
};
