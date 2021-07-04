import { useMemo } from "react";
import { Project } from "types";
import { formatMoney, formatPercentage2Dec } from "utils";
import { getProgress, getPanels } from "../../projects.utils";
import { Chip } from "@material-ui/core";
import { Column } from "react-table";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  chip: {
    fontWeight: 600,
  },
  alignRight: {
    textAlign: "right",
  },
}));

const useProjectsColumns = () => {
  const classes = useStyles();
  const columns: Array<Column<Project>> = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Location",
        accessor: ({ city, state }: Project) => `${city}, ${state}`,
      },
      {
        Header: "Funded",
        accessor: (row: Project) =>
          (row.sharesSold ?? 0) >= (row.totalShares ?? 0),
        Cell: ({ value }: { value: boolean }) =>
          value ? (
            <Chip
              color="primary"
              size="small"
              label="Funded"
              className={classes.chip}
            />
          ) : (
            ""
          ),
        sortType: "basic",
      },
      {
        Header: "Share Price",
        accessor: ({ sharePrice }: Project) => formatMoney(sharePrice ?? 0),
        className: classes.alignRight,
      },
      {
        Header: "RoR (rate of return)",
        accessor: ({ ror }: Project) => formatPercentage2Dec(ror ?? 0),
        className: classes.alignRight,
      },
      {
        Header: "Progress",
        accessor: ({ sharesSold, totalShares }: Project) =>
          getProgress({ sharesSold, totalShares }),
        className: classes.alignRight,
      },
      {
        Header: "Shares (funded/total)",
        accessor: ({ sharesSold, totalShares }: Project) =>
          getPanels({ sharesSold, totalShares }),
        className: classes.alignRight,
        disableSortBy: true,
        tabIndex: -1,
      },
    ],
    [classes.alignRight, classes.chip]
  );

  return columns;
};

export default useProjectsColumns;
