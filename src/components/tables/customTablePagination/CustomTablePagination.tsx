import { TablePagination } from "@material-ui/core";
import { TablePaginationActions } from "components";
import { useStore } from "hooks";
import shallow from "zustand/shallow";
import { useTranslation } from "react-i18next";
import useStyles from "./customTablePagination.jss";
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
  const classes = useStyles();
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
      count={rows.length}
      page={pageIndex}
      rowsPerPage={pageSize}
      rowsPerPageOptions={[5, 10, 25]}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
      }}
      labelRowsPerPage={t("table.rowsPerPage")}
      labelDisplayedRows={({ from, to, count }) => {
        return t("table.displayedRows", { from, to, count });
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      onChangePage={handleChangePage}
      ActionsComponent={TablePaginationActions}
      component={component}
      className={classes.tablePagination_root}
    />
  );
}
