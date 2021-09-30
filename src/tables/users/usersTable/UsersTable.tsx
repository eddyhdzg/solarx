import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
} from "@mui/material";
import { CustomTablePagination } from "components";
import { StyledPaper, StyledTableHead } from "./UsersTable.styled";

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
  return (
    <StyledPaper>
      <Table {...getTableProps()}>
        <StyledTableHead>
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
        </StyledTableHead>
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
    </StyledPaper>
  );
}
