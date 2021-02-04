import React from "react";

interface Props {
  src: string;
  hueRotate: number;
  contrast: number;
}

export const Image: React.VFC<Props> = ({ src, hueRotate, contrast }) => {
  return (
    <img
      src={src}
      style={{ filter: `hue-rotate(${hueRotate}deg) contrast(${contrast}%)` }}
    />
  );
};
