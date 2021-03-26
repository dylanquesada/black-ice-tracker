type image = {
    src: string;
    title: string;
}

const images: image[] = [
  { src: "./assets/images/5.7_USG.webp", title: "5.7_USG" },
  { src: "./assets/images/6P41.webp", title: "6P41" },
  { src: "./assets/images/9mm_C1.webp", title: "9mm_C1" },
  { src: "./assets/images/9x19_VSN.webp", title: "9x19_VSN" },
  { src: "./assets/images/416-C_Carbine.webp", title: "416-C_Carbine" },
  { src: "./assets/images/417.webp", title: "417" },
  { src: "./assets/images/552_Commando.webp", title: "552_Commando" },
  { src: "./assets/images/556xi.webp", title: "556xi" },
  { src: "./assets/images/AK-12.webp", title: "AK-12" },
  { src: "./assets/images/AR33.webp", title: "AR33" },
  { src: "./assets/images/AUG_A2.webp", title: "AUG_A2" },
  { src: "./assets/images/C8-SFW.webp", title: "C8-SFW" },
  { src: "./assets/images/CAMRS.webp", title: "CAMRS" },
  { src: "./assets/images/F2.webp", title: "F2" },
  { src: "./assets/images/FMG-9.webp", title: "FMG-9" },
  { src: "./assets/images/G8A1.webp", title: "G8A1" },
  { src: "./assets/images/G36C.webp", title: "G36C" },
  { src: "./assets/images/GSH_18.webp", title: "GSH_18" },
  { src: "./assets/images/L85A2.webp", title: "L85A2" },
  { src: "./assets/images/LFP586.webp", title: "LFP586" },
  { src: "./assets/images/M45_MEUSOC.webp", title: "M45_MEUSOC" },
  { src: "./assets/images/M590A1.webp", title: "M590A1" },
  { src: "./assets/images/M870.webp", title: "M870" },
  { src: "./assets/images/M1014.webp", title: "M1014" },
  { src: "./assets/images/Mk1_9mm.webp", title: "Mk1_9mm" },
  { src: "./assets/images/MP5.webp", title: "MP5" },
  { src: "./assets/images/MP5K.webp", title: "MP5K" },
  { src: "./assets/images/MP7.webp", title: "MP7" },
  { src: "./assets/images/OTs-03.webp", title: "OTs-03" },
  { src: "./assets/images/P9.webp", title: "P9" },
  { src: "./assets/images/P12.webp", title: "P12" },
  { src: "./assets/images/P90.webp", title: "P90" },
  { src: "./assets/images/P226_Mk_25.webp", title: "P226_Mk_25" },
  { src: "./assets/images/PMM.webp", title: "PMM" },
  { src: "./assets/images/R4-C.webp", title: "R4-C" },
  { src: "./assets/images/SASG-12.webp", title: "SASG-12" },
  { src: "./assets/images/SG_CQB.webp", title: "SG_CQB" },
  { src: "./assets/images/SMG_11.webp", title: "SMG_11" },
  { src: "./assets/images/Super_90.webp", title: "Super_90" },
  { src: "./assets/images/UMP45.webp}", title: "UMP45" },
];

function imageLoader(): image[] {
    return images;
}

export default imageLoader;