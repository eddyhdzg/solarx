import { TableCell, TableRow } from "@mui/material";
import { ProjectPrice } from "solarx-types";
import { formatMoney, formatNumber } from "utils";
import { TableCellLast } from "../../ProjectForms.styled";

interface StandardProjectPriceRowProps extends ProjectPrice {
  scrolled: boolean;
}

export default function StandardProjectPriceRow({
  scrolled,
  basePrice = 1,
  quantity = 0,
  unit_amount = 1,
  ...price
}: StandardProjectPriceRowProps) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {price?.id}
      </TableCell>
      <TableCell align="right">{formatNumber(quantity)}</TableCell>
      <TableCell align="right">{formatMoney(unit_amount)}</TableCell>
      <TableCell align="right">{formatMoney(basePrice)}</TableCell>
      <TableCell align="right">-</TableCell>
      <TableCell>{price?.description}</TableCell>
      <TableCell align="right">{price?.investors}</TableCell>
      <TableCell align="right">{price?.panelsSold}</TableCell>
      <TableCellLast align="right" scrolled={scrolled} />
    </TableRow>
  );
}
