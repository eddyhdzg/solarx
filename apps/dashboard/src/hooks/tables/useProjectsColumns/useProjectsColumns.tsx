import { useMemo } from "react";
import { Project, ProjectSection } from "solarx-types";
import {
  formatMoney,
  formatPercentage2Dec,
  formatTimestamp,
  getProgress,
  getPanelsRatio,
  sortPanels,
} from "utils";
import { Chip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Column, Row, Cell } from "react-table";
import { LinearWithValueLabel } from "components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface IColumns {
  publicColumns: Column<object>[];
  privateColumns: Column<object>[];
}

interface IuseProjectsColumnsArgs {
  section: ProjectSection;
}

const useProjectsColumns = ({ section }: IuseProjectsColumnsArgs) => {
  const { t } = useTranslation();

  const columns = useMemo(() => {
    const commonColumns = [
      {
        id: "id",
        Header: t("common.id"),
        accessor: "id",
        minWidth: 160,
      },
      {
        id: "name",
        Header: t("projects.projectName"),
        accessor: "name",
        minWidth: 160,
      },
      {
        id: "location",
        Header: t("projects.location"),
        accessor: ({ city, state }: Project) => `${city}, ${state}`,
        minWidth: 160,
      },
      {
        id: "funded",
        Header: t("projects.funded"),
        accessor: (row: Project) =>
          (row.panelsSold ?? 0) >= (row.totalPanels ?? 0) ? true : false,
        Cell: ({ value }: { value: boolean }) =>
          value ? (
            <Chip size="small" label={t("projects.funded")} variant="teal" />
          ) : (
            <Chip size="small" label={t("projects.notFunded")} disabled />
          ),
        sortType: "basic",
        minWidth: 160,
      },
      {
        id: "basePrice",
        Header: t("projects.basePrice"),
        accessor: ({ basePrice = 0 }: Project) => formatMoney(basePrice),
        className: "alignRight",
        filter: (
          rows: Row<Project>[],
          _: string,
          filterValue: [number, number]
        ) => {
          return rows.filter((row: Row<Project>) => {
            const value = (row.original.basePrice || 0) / 100;
            return filterValue[0] <= value && value <= filterValue[1];
          });
        },
      },
      {
        id: "roi",
        Header: t("projects.roi"),
        accessor: ({ roi = 0 }: Project) => formatPercentage2Dec(roi),
        className: "alignRight",
      },
      {
        id: "progress",
        Header: t("projects.progress"),
        accessor: ({ panelsSold, totalPanels }: Project) =>
          getProgress({ panelsSold, totalPanels }),
        Cell: (cell: Cell<Project>) => (
          <LinearWithValueLabel
            label={cell.value}
            panelsSold={cell.row.original.panelsSold}
            totalPanels={cell.row.original.totalPanels}
          />
        ),
      },
      {
        id: "panels",
        Header: t("projects.panels(funded/total)"),
        accessor: ({ panelsSold, totalPanels }: Project) =>
          getPanelsRatio({ panelsSold, totalPanels }),
        className: "alignRight",
        sortType: sortPanels,
      },
      {
        id: "ppa",
        Header: t("projects.ppa"),
        accessor: "ppa",
      },
      {
        id: "created",
        Header: t("projects.created"),
        accessor: ({ created }: Project) => {
          return created ? formatTimestamp(created) : "";
        },
      },
    ];

    const publicColumns = [
      ...commonColumns,
      {
        Header: t("table.actions"),
        accessor: ({ id }: Project) => id,
        Cell: ({ value }: { value?: string }) => {
          return (
            <IconButton
              aria-label="goto-project"
              component={Link}
              to={`/crowdfunding/${value}`}
            >
              <ArrowForwardIcon />
            </IconButton>
          );
        },
        disableSortBy: true,
        tabIndex: -1,
      },
    ];

    const privateColumns = [
      ...commonColumns,
      {
        Header: t("projects.active"),
        accessor: "active",
        Cell: ({ value }: { value: boolean }) =>
          !value ? (
            <Chip size="small" label={t("projects.active")} variant="teal" />
          ) : (
            <Chip size="small" label={t("projects.notActive")} variant="red" />
          ),
        sortType: "basic",
      },
      {
        Header: t("table.actions"),
        accessor: ({ id }: Project) => id,
        Cell: ({ value }: { value?: string }) => {
          return (
            <IconButton
              aria-label="goto-edit-project"
              component={Link}
              to={`/${section}/${value}`}
            >
              <ArrowForwardIcon />
            </IconButton>
          );
        },
        disableSortBy: true,
        tabIndex: -1,
      },
    ];

    return { publicColumns, privateColumns };
  }, [section, t]) as IColumns;

  return { ...columns };
};

export default useProjectsColumns;
