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
        accessor: "location",
      },
      {
        Header: "Funded",
        accessor: "funded",
        Cell: ({ value }: { value: Project["funded"] }) =>
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
        accessor: "sharePrice",
        Cell: ({ value }: { value: Project["sharePrice"] }) =>
          formatMoney(value),
        className: classes.alignRight,
      },
      {
        Header: "RoR (rate of return)",
        accessor: "ror",
        Cell: ({ value }: { value: Project["ror"] }) =>
          formatPercentage2Dec(value),
        className: classes.alignRight,
      },
      {
        Header: "Progress",
        accessor: (row: Project) => getProgress(row),
        className: classes.alignRight,
      },
      {
        Header: "Shares (funded/total)",
        accessor: (row: Project) => getPanels(row),
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
