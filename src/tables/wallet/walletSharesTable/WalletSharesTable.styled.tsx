import {
  styled,
  Avatar,
  TableContainer,
  TableHead,
  TableCell,
} from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  whiteSpace: "nowrap",
  "& th, & td": {
    borderBottomColor: theme.palette.divider,
  },
  "& tbody tr:last-child th, tbody tr:last-child td": {
    borderBottom: "none",
  },
}));

export const StyledTableCellHeader = styled(TableCell)({
  fontWeight: 600,
});

export const StyledTableHead = styled(TableHead)({
  textTransform: "capitalize",
});

export const CenterCol = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
}));
