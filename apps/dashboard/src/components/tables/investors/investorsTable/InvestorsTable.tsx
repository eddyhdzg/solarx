import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
} from "@mui/material";
import { CustomTablePagination } from "components";
import { TableInstance, HeaderGroup, Row, Cell } from "react-table";
import { Investors } from "solarx-types";

export default function InvestorsTable({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  page,
  gotoPage,
  setPageSize,
  state,
}: TableInstance<Investors>) {
  return (
    <Paper
      sx={{
        display: "flex",
        whiteSpace: "nowrap",
        overflow: "auto",
      }}
    >
      <Table {...getTableProps()}>
        <TableHead
          sx={{
            textTransform: "capitalize",
          }}
        >
          {headerGroups.map((headerGroup: HeaderGroup<Investors>) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(
                (
                  column: HeaderGroup<Investors> & {
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
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row: Row<Investors>) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(
                  (
                    cell: Cell<Investors> & {
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
              actionType="INVESTORS_CHANGE_PAGESIZE"
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
}
