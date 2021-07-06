import { useMemo } from "react";
import { Project } from "types";
import { formatMoney, formatPercentage2Dec, fomatTimeStamp } from "utils";
import { getProgress, getPanelsRatio, sortShares } from "utils";
import { Chip, IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import useStyles from "./useProjectsColumns.jss";

interface IuseProjectsColumns {
  publicColumns: any;
  privateColumns: any;
}

const useProjectsColumns = () => {
  const classes = useStyles();
  const columns: IuseProjectsColumns = useMemo(() => {
    const commonColumns = [
      {
        id: "id",
        Header: "id",
        accessor: "id",
      },
      {
        id: "name",
        Header: "Project Name",
        accessor: "name",
      },
      {
        id: "location",
        Header: "Location",
        accessor: ({ city, state }: Project) => `${city}, ${state}`,
      },
      {
        id: "funded",
        Header: "Funded",
        accessor: (row: Project) =>
          (row.sharesSold ?? 0) >= (row.totalShares ?? 0) ? true : false,
        Cell: ({ value }: { value: boolean }) =>
          value ? (
            <Chip
              color="primary"
              size="small"
              label="Funded"
              className={classes.useProjectsColumns_chip}
            />
          ) : (
            ""
          ),
        sortType: "basic",
      },
      {
        id: "sharePrice",
        Header: "Share Price",
        accessor: ({ sharePrice }: Project) => sharePrice ?? 0,
        className: classes.useProjectsColumns_alignRight,
        Cell: ({ value }: { value: Project["sharePrice"] }) =>
          formatMoney(value ?? 0),
      },
      {
        id: "ror",
        Header: "RoR (rate of return)",
        accessor: ({ ror }: Project) => formatPercentage2Dec(ror ?? 0),
        className: classes.useProjectsColumns_alignRight,
      },
      {
        id: "progress",
        Header: "Progress",
        accessor: ({ sharesSold, totalShares }: Project) =>
          getProgress({ sharesSold, totalShares }),
        className: classes.useProjectsColumns_alignRight,
      },
      {
        id: "shares",
        Header: "Shares (funded/total)",
        accessor: ({ sharesSold, totalShares }: Project) =>
          getPanelsRatio({ sharesSold, totalShares }),
        className: classes.useProjectsColumns_alignRight,
        sortType: sortShares,
      },
      {
        id: "ppa",
        Header: "PPA",
        accessor: "ppa",
      },
      {
        id: "created",
        Header: "Created",
        accessor: ({ created }: Project) => {
          return created ? fomatTimeStamp(created) : "";
        },
      },
    ];

    const publicColumns = [
      ...commonColumns,
      {
        Header: "Actions",
        accessor: ({ id }: Project) => id,
        Cell: ({ value }: { value?: string }) => {
          return (
            <IconButton
              aria-label="goto-project"
              component={Link}
              to={`/crowdfunding/projects/${value}`}
            >
              <ArrowForwardIcon />
            </IconButton>
          );
        },
        className: [
          classes.useProjectsColumns_noPadding,
          classes.useProjectsColumns_alignRight,
        ].join(" "),
        disableSortBy: true,
        tabIndex: -1,
      },
    ];

    const privateColumns = [
      ...commonColumns,
      {
        Header: "Soft Delete",
        accessor: "softDelete",
        Cell: ({ value }: { value: boolean }) =>
          value ? (
            <Chip
              color="secondary"
              size="small"
              label="Deleted"
              className={classes.useProjectsColumns_chip}
            />
          ) : (
            ""
          ),
        sortType: "basic",
      },
      {
        Header: "Actions",
        accessor: ({ id }: Project) => id,
        Cell: ({ value }: { value?: string }) => {
          return (
            <IconButton
              aria-label="goto-edit-project"
              component={Link}
              to={`/admin/projects/edit-project/${value}`}
            >
              <ArrowForwardIcon />
            </IconButton>
          );
        },
        className: [
          classes.useProjectsColumns_noPadding,
          classes.useProjectsColumns_alignRight,
        ].join(" "),
        disableSortBy: true,
        tabIndex: -1,
      },
    ];

    return { publicColumns, privateColumns };
  }, [
    classes.useProjectsColumns_alignRight,
    classes.useProjectsColumns_chip,
    classes.useProjectsColumns_noPadding,
  ]);

  return { ...columns };
};

export default useProjectsColumns;
