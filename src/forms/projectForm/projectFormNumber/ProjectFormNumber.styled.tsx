import { styled, TableContainer } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  "& th, & td": {
    borderBottomColor: "transparent",
  },
}));
