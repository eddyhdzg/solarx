import { Project } from "types";
import { formatNumber } from "utils";

export const getPanels = ({ sharesSold, totalShares }: Project) => {
  return `${sharesSold?.toLocaleString()} / ${totalShares?.toLocaleString()}`;
};

export const getProgress = ({ sharesSold, totalShares }: Project) => {
  return `${formatNumber((sharesSold / totalShares) * 100)} %`;
};

export const tileData = [
  {
    title: "Image1",
    img: "https://reneweconomy.com.au/wp-content/uploads/2020/07/Canva-Commercial-building-factory-rooftop-installed-photovoltaic-solar-panels-1-optimised-1280x720.jpg",
  },
  {
    title: "Image2",
    img: "https://www.solarfeeds.com/mag/wp-content/uploads/2019/08/solar-energy-3297945_1280.jpg",
  },
  {
    title: "Image3",
    img: "https://iaa-network.com/wp-content/uploads/2020/09/Solar-Panel-Arbitration.jpg",
  },
  {
    title: "Image4",
    img: "https://www.hisour.com/wp-content/uploads/2018/09/Nominal-power-in-photovoltaic-1280x720.jpg",
  },
];
