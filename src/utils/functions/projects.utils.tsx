import { Row } from "react-table";
import { Project } from "types";
import { formatNumber } from "utils";
import { matchSorter } from "match-sorter";

export const getPanelsRatio = ({ sharesSold, totalShares }: Project) => {
  return `${sharesSold?.toLocaleString()} / ${totalShares?.toLocaleString()}`;
};

export const getProgress = ({ sharesSold = 0, totalShares = 0 }: Project) => {
  return `${formatNumber((sharesSold / totalShares) * 100)} %`;
};

export const sortShares = (a: Row<Project>, b: Row<Project>) => {
  const aRatio = (a.original.sharesSold || 0) / (a.original.totalShares || 1);
  const bRatio = (b.original.sharesSold || 0) / (b.original.totalShares || 1);

  if (a === b) return 0;
  return aRatio > bRatio ? 1 : -1;
};

export const fuzzyTextFilterFn = (
  rows: Row<object>[],
  id: string,
  filterValue: string
) => {
  return matchSorter(rows, filterValue, {
    keys: [(row: Row<object>) => row.values[id]],
  });
};

fuzzyTextFilterFn.autoRemove = (val: string) => !val;

// https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript
export const stringToBoolean = (s: string) => (s === "false" ? false : !!s);
