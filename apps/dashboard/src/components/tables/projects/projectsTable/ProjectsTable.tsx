import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
  TableSortLabel,
} from "@mui/material";
import { CustomTablePagination } from "components";
import { Project } from "solarx-types";
import { HeaderGroup, TableInstance, Row, Cell } from "react-table";
import { StyledPaper, StyledTableHead } from "./ProjectsTable.styled";

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
}: TableInstance<Project>) {
  return (
    <StyledPaper>
      <Table {...getTableProps()}>
        <StyledTableHead>
          {headerGroups.map((headerGroup: HeaderGroup<Project>) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(
                (
                  column: HeaderGroup<Project> & {
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
                    sx={{
                      minWidth: column?.minWidth ? column.minWidth : undefined,
                    }}
                  >
                    {column.render("Header")}
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? "desc" : "asc"}
                      tabIndex={-1}
                    />
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </StyledTableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row: Row<Project>) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(
                  (
                    cell: Cell<Project> & {
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
              actionType="PROJECTS_CHANGE_PAGESIZE"
            />
          </TableRow>
        </TableFooter>
      </Table>
    </StyledPaper>
  );
}
