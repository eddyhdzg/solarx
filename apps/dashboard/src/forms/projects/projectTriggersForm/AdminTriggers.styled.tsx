import {
  styled,
  Table as MuiTable,
  TableProps,
  TableCell,
  TableCellProps,
  TableRow,
  TableRowProps,
} from "@mui/material";

export const Table = styled(MuiTable)({
  whiteSpace: "nowrap",
  overflow: "auto",
});

export const TableCellLast = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})(({ theme }) => (props: { scrolled: boolean }) => ({
  position: "sticky",
  right: -1,
  backgroundColor: theme.palette.background.default,
  backgroundImage: theme.custom.elevation[3],
  boxShadow: props.scrolled
    ? "inset 10px 0 8px -8px rgba(0,0,0,0.2)"
    : undefined,
}));

export const LastRow = styled(TableRow)({
  "& td, & th": { border: 0 },
});

interface IAdminTriggersCompoundComponents {
  Table: React.FC<TableProps>;
  TableCellLast: React.FC<TableCellProps & { scrolled: boolean }>;
  LastRow: React.FC<TableRowProps>;
}

const AdminTriggers: React.FC & IAdminTriggersCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

AdminTriggers.TableCellLast = TableCellLast;
AdminTriggers.Table = Table;
AdminTriggers.LastRow = LastRow;

export default AdminTriggers;
