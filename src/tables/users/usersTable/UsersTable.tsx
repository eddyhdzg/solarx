import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
} from "@mui/material";
import { CustomTablePagination } from "components";
import { TableInstance, HeaderGroup, Row, Cell } from "react-table";
import { FirestoreUser } from "types";
import { StyledPaper, StyledTableHead } from "./UsersTable.styled";

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
}: TableInstance<FirestoreUser>) {
  return (
    <StyledPaper>
      <Table {...getTableProps()}>
        <StyledTableHead>
          {headerGroups.map((headerGroup: HeaderGroup<FirestoreUser>) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(
                (
                  column: HeaderGroup<FirestoreUser> & {
                    tabIndex?: number;
                    className?: string;
                  }
                ) => (
                  <TableCell
                    tabIndex={column?.tabIndex || 1}
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
                )
              )}
            </TableRow>
          ))}
        </StyledTableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row: Row<FirestoreUser>) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(
                  (
                    cell: Cell<FirestoreUser> & {
                      column: {
                        className?: string;
                      };
                    }
                  ) => {
                    return (
                      <TableCell
                        {...cell.getCellProps({
                          className: cell.column.className,
                        })}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  }
                )}
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
