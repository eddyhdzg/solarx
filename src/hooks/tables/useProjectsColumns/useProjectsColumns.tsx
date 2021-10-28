import { useMemo } from "react";
import { Project, ProjectSection } from "types";
import {
  formatMoney,
  formatPercentage2Dec,
  fomatTimeStamp,
  getProgress,
  getPanelsRatio,
  sortShares,
} from "utils";
import { Chip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Column } from "react-table";
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
  const columns: IColumns = useMemo(() => {
    const commonColumns = [
      {
        id: "id",
        Header: t("projects.id"),
        accessor: "id",
      },
      {
        id: "name",
        Header: t("projects.projectName"),
        accessor: "name",
        filter: "fuzzyText",
      },
      {
        id: "location",
        Header: t("projects.location"),
        accessor: ({ city, state }: Project) => `${city}, ${state}`,
        filter: "fuzzyText",
      },
      {
        id: "funded",
        Header: t("projects.funded"),
        accessor: (row: Project) =>
          (row.sharesSold ?? 0) >= (row.totalShares ?? 0) ? true : false,
        Cell: ({ value }: { value: boolean }) =>
          value ? (
            <Chip color="primary" size="small" label={t("projects.funded")} />
          ) : (
            ""
          ),
        sortType: "basic",
      },
      {
        id: "sharePrice",
        Header: t("projects.sharePrice"),
        accessor: ({ sharePrice = 0 }: Project) => formatMoney(sharePrice),
        className: "alignRight",
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
        accessor: ({ sharesSold, totalShares }: Project) =>
          getProgress({ sharesSold, totalShares }),
        className: "alignRight",
      },
      {
        id: "shares",
        Header: t("projects.sharesRatio"),
        accessor: ({ sharesSold, totalShares }: Project) =>
          getPanelsRatio({ sharesSold, totalShares }),
        className: "alignRight",
        sortType: sortShares,
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
          return created ? fomatTimeStamp(created) : "";
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
        Header: t("projects.archived"),
        accessor: "archived",
        Cell: ({ value }: { value: boolean }) =>
          value ? <Chip color="secondary" size="small" label="Archived" /> : "",
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
  }, [section, t]);

  return { ...columns };
};

export default useProjectsColumns;
