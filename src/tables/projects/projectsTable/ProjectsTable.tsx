import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
} from "@material-ui/core";
import useStyles from "./projectsTable.jss";
import ProjectsTablePagination from "../projectsTablePagination/ProjectsTablePagination";

export default function ProjectsTable({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  page,
  gotoPage,
  setPageSize,
  state,
}: any) {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.projectsTable_paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup: any) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <TableCell
                    tabIndex={column?.tabIndex || "1"}
                    onKeyPress={() => {
                      column.toggleSortBy();
                    }}
                    {...column.getHeaderProps([
                      column.getSortByToggleProps(),
                      {
                        className: column?.className,
                      },
                    ])}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <TableCell
                        {...cell.getCellProps({
                          className: cell.column.className,
                        })}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <ProjectsTablePagination
                rows={rows}
                gotoPage={gotoPage}
                setPageSize={setPageSize}
                state={state}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </>
  );
}
