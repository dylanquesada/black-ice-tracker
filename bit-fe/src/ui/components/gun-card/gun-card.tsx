import React from "react";
import GunUtils from "./gun-card.utils";
import imageLoader from "../../../image-loader";

type GunCardProps = {
  name: string;
  id: number;
};

const images = imageLoader();
export const GunCard = ({ name, id }: GunCardProps) => (
  <div>
    <h2>{name}</h2>
    <img
      title={name}
      alt={name}

      src={`./${GunUtils.mapNameToImgPath(name)}.webp`}
    ></img>
  </div>
);
