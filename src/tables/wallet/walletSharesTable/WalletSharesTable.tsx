import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { formatNumber, formatUnits, formatPercentage2Dec } from "utils";
import { UserShare } from "types";
import {
  StyledTableContainer,
  StyledTableHead,
  CenterCol,
  StyledAvatar,
  StyledTableCellHeader,
} from "./WalletSharesTable.styled";

interface WalletSharesTableProps {
  rows: UserShare[];
}

export default function WalletSharesTable({ rows }: WalletSharesTableProps) {
  return (
    <StyledTableContainer>
      <Table aria-label="simple table">
        <StyledTableHead>
          <TableRow>
            <StyledTableCellHeader>Project</StyledTableCellHeader>
            <TableCell align="center">Shares</TableCell>
            <TableCell align="right">Share Price</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right">ROI</TableCell>
            <TableCell align="right">Monthly Revenue</TableCell>
            <TableCell align="right">Yearly Revenue</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map(({ roi = 0, sharePrice = 0, shares = 0, ...row }) => {
            const totalSharePrice = sharePrice * shares;
            const yearlyRevenue = sharePrice * roi * 0.01 * shares;
            const monthlyRevenue = yearlyRevenue / 12;
            return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <CenterCol>
                    <StyledAvatar
                      alt="project-avatar"
                      src={row.avatar || undefined}
                    />
                    {row.name}
                  </CenterCol>
                </TableCell>
                <TableCell align="center">{formatNumber(shares)}</TableCell>
                <TableCell align="right">
                  ${formatUnits(sharePrice)}
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    MXN
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  ${formatUnits(totalSharePrice)}
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    MXN
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2" color="primary">
                    {formatPercentage2Dec(roi)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  ${formatUnits(monthlyRevenue)}
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    MXN
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  ${formatUnits(yearlyRevenue)}
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    MXN
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
