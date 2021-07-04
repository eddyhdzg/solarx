import { Project } from "types";
import { formatNumber } from "utils";

export const getPanelsRatio = ({ sharesSold, totalShares }: Project) => {
  return `${sharesSold?.toLocaleString()} / ${totalShares?.toLocaleString()}`;
};

export const getProgress = ({ sharesSold = 0, totalShares = 0 }: Project) => {
  return `${formatNumber((sharesSold / totalShares) * 100)} %`;
};
