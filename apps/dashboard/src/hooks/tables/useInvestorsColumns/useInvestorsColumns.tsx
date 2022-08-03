import { Avatar } from "@mui/material";
import { useMemo } from "react";
import { UserRoleForm } from "components";
import { Investor, UserRole } from "solarx-types";
import { useTranslation } from "react-i18next";
import { formatTimestampWithMinAndSec } from "utils";
import { Column } from "react-table";

interface Row {
  original: Investor;
}

const useInvestorsColumns = () => {
  const { t } = useTranslation();
  const columns: Column<object>[] = useMemo(() => {
    const investors = [
      {
        id: "avatar",
        Header: t("common.avatar"),
        accessor: "avatar",
        Cell: ({ value }: { value: string }) => {
          return <Avatar alt="avatar" src={value || undefined} />;
        },
        disableSortBy: true,
        tabIndex: -1,
      },
      {
        id: "uid",
        Header: t("common.uid"),
        accessor: "uid",
      },
      {
        id: "email",
        Header: t("common.email"),
        accessor: "email",
      },
      {
        id: "displayName",
        Header: t("pages.more.profile.displayName"),
        accessor: "displayName",
      },
      {
        id: "created",
        Header: t("projects.created"),
        accessor: ({ created }: Investor) => {
          return created ? formatTimestampWithMinAndSec(created) : "";
        },
      },
      {
        id: "role",
        Header: t("pages.admin.investors.role"),
        accessor: "role",
        Cell: ({ value, row }: { value: UserRole; row: Row }) => {
          return <UserRoleForm uid={row?.original?.uid} role={value} />;
        },
      },
    ];
    return investors;
  }, [t]);

  return columns;
};

export default useInvestorsColumns;