import {
  Avatar,
  TableContainer,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatNumber, formatPercentage2Dec } from "utils";

function createData(
  img: string,
  name: string,
  shares: number,
  sharePrice: number,
  totalPrice: number,
  roi: number,
  monthlyRevenue: number,
  yearlyRevenue: number
) {
  return {
    img,
    name,
    shares,
    sharePrice,
    totalPrice,
    roi,
    monthlyRevenue,
    yearlyRevenue,
  };
}

const rows = [
  createData(
    "https://firebasestorage.googleapis.com/v0/b/solarx-firebase.appspot.com/o/projects%2F4etm6hFSQwnB0T3SADlH%2FcoverImage?alt=media&token=0778fca0-e525-4fe5-a6c8-840337489b12",
    "Valle Oriente",
    2,
    1000,
    2000,
    17.5,
    29.16,
    350
  ),
  createData(
    "https://firebasestorage.googleapis.com/v0/b/solarx-firebase.appspot.com/o/projects%2Fpf1JFJxystuQJ0RPQoxm%2FcoverImage?alt=media&token=4801c7a0-5cb8-4693-a1ed-2de8830fed3e",
    "GE Apodaca",
    1,
    200,
    200,
    18.1,
    3.02,
    36.2
  ),
  createData(
    "https://firebasestorage.googleapis.com/v0/b/solarx-firebase.appspot.com/o/projects%2FqhwutrSFOVZdvOSken1M%2FcoverImage?alt=media&token=13cf2f66-4c9c-46fa-aaad-c3e3f81c3b39",
    "AMHSA",
    4,
    2000,
    8000,
    17.85,
    119,
    1428
  ),
];

export default function WalletSharesTable() {
  return (
    <TableContainer
      sx={{
        whiteSpace: "nowrap",
        "& th, & td": {
          // borderBottomColor: "#242424",
        },
        "& tbody tr:last-child th, tbody tr:last-child td": {
          borderBottom: "none",
        },
      }}
    >
      <Table aria-label="simple table">
        <TableHead
          sx={{
            textTransform: "capitalize",
          }}
        >
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell align="center">Shares</TableCell>
            <TableCell align="right">Share Price</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right">ROI</TableCell>
            <TableCell align="right">Monthly Revenue</TableCell>
            <TableCell align="right">Yearly Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="project-avatar"
                  src={row.img || undefined}
                  sx={{
                    mr: 1.5,
                  }}
                />
                {row.name}
              </TableCell>
              <TableCell align="center">{formatNumber(row.shares)}</TableCell>
              <TableCell align="right">
                ${formatNumber(row.sharePrice)}
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  MXN
                </Typography>
              </TableCell>
              <TableCell align="right">
                ${formatNumber(row.totalPrice)}
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
                  {formatPercentage2Dec(row.roi)}
                </Typography>
              </TableCell>
              <TableCell align="right">
                ${formatNumber(row.monthlyRevenue)}
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  MXN
                </Typography>
              </TableCell>
              <TableCell align="right">
                ${formatNumber(row.yearlyRevenue)}
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  MXN
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
