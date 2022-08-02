import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { formatNumber, formatUnits, formatPercentage2Dec } from "utils";
import { UserPanel } from "solarx-types";
import { useTranslation } from "react-i18next";
import {
  StyledTableContainer,
  StyledTableHead,
  CenterCol,
  StyledAvatar,
  StyledTableCellHeader,
} from "./WalletPanelsTable.styled";

interface WalletPanelsTableProps {
  rows: UserPanel[];
}

export default function WalletPanelsTable({ rows }: WalletPanelsTableProps) {
  const { t } = useTranslation();

  return (
    <StyledTableContainer>
      <Table aria-label="simple table">
        <StyledTableHead>
          <TableRow>
            <StyledTableCellHeader>
              {t("projects.project")}
            </StyledTableCellHeader>
            <TableCell align="right">{t("projects.basePrice")}</TableCell>
            <TableCell align="center">{t("projects.quantity")}</TableCell>
            <TableCell align="right">{t("projects.total")}</TableCell>
            <TableCell align="right">{t("projects.roi")}</TableCell>
            <TableCell align="right">{t("projects.monthlyRevenue")}</TableCell>
            <TableCell align="right">{t("projects.yearlyRevenue")}</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map(({ roi = 0, basePrice = 0, quantity = 0, ...row }) => {
            const totalPanelPrice = basePrice * quantity;
            const yearlyRevenue = totalPanelPrice * roi * 0.01;
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
                <TableCell align="right">
                  ${formatUnits(basePrice)}
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    MXN
                  </Typography>
                </TableCell>
                <TableCell align="center">{formatNumber(quantity)}</TableCell>
                <TableCell align="right">
                  ${formatUnits(totalPanelPrice)}
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
