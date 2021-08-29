import { TablePagination } from "@material-ui/core";
import { TablePaginationActions } from "components";
import { useStore } from "hooks";
import shallow from "zustand/shallow";
import useStyles from "./projectsTablePagination.jss";

interface IProjectsTablePaginationProps {
  rows: any;
  gotoPage: any;
  setPageSize: any;
  state: any;
  component?: "td" | "div";
}

export default function ProjectsTablePagination({
  rows,
  gotoPage,
  setPageSize,
  state: { pageIndex, pageSize },
  component = "td",
}: IProjectsTablePaginationProps) {
  const classes = useStyles();
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
      rowsPerPageOptions={[5, 10, 25]}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
      }}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
      component={component}
      className={classes.tablePagination_root}
      onPageChange={handleChangePage}
    />
  );
}
