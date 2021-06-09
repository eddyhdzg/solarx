import { TablePagination } from "@material-ui/core";
import { useGridSlotComponentProps } from "@material-ui/data-grid";
import TablePaginationActions from "../tablePaginationActions/TablePaginationActions";
import useStyles from "./customPagination.jss";

export default function CustomPagination() {
  const classes = useStyles();
  const { state, apiRef } = useGridSlotComponentProps();

  return (
    <TablePagination
      rowsPerPageOptions={state.options.rowsPerPageOptions}
      rowsPerPage={state.pagination.pageSize}
      count={state.pagination.rowCount}
      page={state.pagination.page}
      onChangePage={(_, value) => apiRef.current.setPage(value)}
      onChangeRowsPerPage={(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        apiRef.current.setPageSize(parseInt(event.target.value, 10));
        apiRef.current.setPage(0);
      }}
      ActionsComponent={TablePaginationActions}
      className={classes.customPagination_root}
      component="div"
    />
  );
}
