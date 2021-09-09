import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
} from "@material-ui/core";
import { CustomTablePagination } from "components";
import useStyles from "./usersTable.jss";

interface IUsersTableProps {
  getTableProps: any;
  getTableBodyProps: any;
  headerGroups: any;
  rows: any;
  prepareRow: any;
  page: any;
  gotoPage: any;
  setPageSize: any;
  state: any;
}

export default function UsersTable({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  page,
  gotoPage,
  setPageSize,
  state,
}: IUsersTableProps) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.usersTable_paper}>
      <Table {...getTableProps()}>
        <TableHead className={classes.usersTable_header}>
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
            <CustomTablePagination
              rows={rows}
              gotoPage={gotoPage}
              setPageSize={setPageSize}
              state={state}
              actionType="USERS_CHANGE_PAGESIZE"
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
}
