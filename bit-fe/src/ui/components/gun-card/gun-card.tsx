import React from "react";
import GunUtils from "./gun-card.utils";

type GunCardProps = {
    name: string,
    id: number,
}

const images = require.context('../../../assets/images', true);

export const GunCard = ({ name, id }: GunCardProps) => 
<div >
    <h2>{ name }</h2>
    <img title={name} alt={name} src={images(`./${GunUtils.mapNameToImgPath(name)}.webp`).default}></img>
</div>