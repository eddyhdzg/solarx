import { Row } from "react-table";
import { Project, ProjectPrice } from "solarx-types";
import { formatNumber } from "utils";
import { matchSorter } from "match-sorter";

export const getPanelsRatio = ({ panelsSold, totalPanels }: Project) => {
  return `${panelsSold?.toLocaleString()} / ${totalPanels?.toLocaleString()}`;
};

export const getProgress = ({ panelsSold = 0, totalPanels = 1 }: Project) => {
  return `${formatNumber((panelsSold / totalPanels) * 100)}%`;
};

export const sortPanels = (a: Row<Project>, b: Row<Project>) => {
  const aRatio = (a.original.panelsSold || 0) / (a.original.totalPanels || 1);
  const bRatio = (b.original.panelsSold || 0) / (b.original.totalPanels || 1);

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

export const calcGoal = (
  unit_amount: ProjectPrice["unit_amount"] = 0,
  quantity: ProjectPrice["quantity"] = 0
) => {
  return unit_amount * quantity;
};
