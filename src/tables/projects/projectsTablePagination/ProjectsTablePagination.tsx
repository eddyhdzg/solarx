import { TablePagination } from "@material-ui/core";
import { TablePaginationActions } from "components";
import { useStore } from "hooks";
import shallow from "zustand/shallow";

export default function ProjectsTablePagination({
  rows,
  gotoPage,
  setPageSize,
  state: { pageIndex, pageSize },
}: any) {
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
      type: "PROJECTS_CHANGE_PAGESIZE",
      payload: parseInt(event.target.value, 10),
    });
    gotoPage(0);
  };

  return (
    <TablePagination
      count={rows.length}
      page={pageIndex}
      rowsPerPage={pageSize}
      onChangePage={handleChangePage}
      // rowsPerPageOptions={[5, 10, 25]}
      rowsPerPageOptions={[1, 2, 3]}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
      }}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
      style={{
        borderBottom: "none",
      }}
    />
  );
}
