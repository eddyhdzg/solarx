import {
  styled,
  Typography,
  TypographyProps,
  Table as MuiTable,
  TableProps,
  TableCell,
  TableCellProps,
  TableRow,
  TableRowProps,
} from "@mui/material";

const Body = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  "& button": {
    marginLeft: theme.spacing(2),
    whiteSpace: "nowrap",
  },
}));

export const Subtitle = styled(
  (props: TypographyProps & { component: "p" }) => <Typography {...props} />
)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
}));

const Li = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottomColor: theme.palette.divider,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
}));

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

interface ISegmentedControlCompoundComponents {
  Body: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Subtitle: React.FC<TypographyProps & { component: "p" }>;
  Ul: React.FC<React.HTMLAttributes<HTMLUListElement>>;
  Li: React.FC<React.HTMLAttributes<HTMLLIElement>>;
  Table: React.FC<TableProps>;
  TableCellLast: React.FC<TableCellProps & { scrolled: boolean }>;
  LastRow: React.FC<TableRowProps>;
}

const AdminTriggers: React.FC<React.HTMLAttributes<HTMLDivElement>> &
  ISegmentedControlCompoundComponents = ({ children }) => {
  return <>{children}</>;
};

AdminTriggers.Body = Body;
AdminTriggers.Subtitle = Subtitle;
AdminTriggers.Ul = Ul;
AdminTriggers.Li = Li;
AdminTriggers.TableCellLast = TableCellLast;
AdminTriggers.Table = Table;
AdminTriggers.LastRow = LastRow;

export default AdminTriggers;
