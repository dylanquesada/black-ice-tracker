import React from "react";
import GunUtils from "./gun-card.utils";

type GunCardProps = {
  name: string;
  id: number;
};

export const GunCard = ({ name, id }: GunCardProps) => (
  <div>
    <h2>{name}</h2>
    <img
      title={name}
      alt={name}

      src={`./images/${GunUtils.mapNameToImgPath(name)}.webp`}
    ></img>
  </div>
);
