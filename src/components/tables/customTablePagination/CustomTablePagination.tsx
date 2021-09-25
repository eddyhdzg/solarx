import { TablePagination } from "@mui/material";
import { TablePaginationActions } from "components";
import { useStore } from "hooks";
import shallow from "zustand/shallow";
import { useTranslation } from "react-i18next";
import {
  UsersChangePageSize,
  ProjectsChangePageSize,
} from "providers/clientStore/ClientStore.actions";

interface ICustomTablePaginationProps {
  rows: any;
  gotoPage: any;
  setPageSize: any;
  state: any;
  actionType: UsersChangePageSize["type"] | ProjectsChangePageSize["type"];
  component?: "td" | "div";
}

export default function CustomTablePagination({
  rows,
  gotoPage,
  setPageSize,
  state: { pageIndex, pageSize },
  component = "td",
  actionType,
}: ICustomTablePaginationProps) {
  const { t } = useTranslation();
  const { dispatch } = useStore(({ dispatch }) => ({ dispatch }), shallow);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageSize(parseInt(event.target.value, 10));
    dispatch({
      type: actionType,
      payload: parseInt(event.target.value, 10),
    });
    gotoPage(0);
  };

  return (
    <TablePagination
      // rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
      rowsPerPageOptions={[5, 10, 25]}
      count={rows.length}
      rowsPerPage={pageSize}
      page={pageIndex}
      SelectProps={{
        inputProps: {
          "aria-label": "rows per page",
        },
        native: true,
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
      labelRowsPerPage={t("table.rowsPerPage")}
      labelDisplayedRows={({ from, to, count }) => {
        return t("table.displayedRows", { from, to, count });
      }}
      component={component}
    />
  );
}
