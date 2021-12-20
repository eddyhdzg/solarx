import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useProjectPrices, useScrollRight } from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "types";
import EditProjectBuyingOptionForm from "./editProjectPriceForm/EditProjectPriceForm";
import EditProjectPriceRow from "./editProjectPriceRow/EditProjectPriceRow";
import { useTranslation } from "react-i18next";
import {
  Titles,
  StyledTableContainer,
  TableContent,
  TableCellDescription,
  TableCellNumber,
} from "../ProjectForms.styled";

export default function ProjectPriceForm() {
  const { id } = useParams<ProjectIDParams>();
  const { data: prices } = useProjectPrices(id || "");
  const [ref, scroll] = useScrollRight();
  const { t } = useTranslation();

  return (
    <Paper>
      <TableContent>
        <Titles>
          <Typography variant="h6" component="h6">
            {t("forms.projectForm.prices")}
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
            {t("forms.projectForm.pricesDescription")}
          </Typography>
        </Titles>

        <StyledTableContainer ref={ref}>
          <Table aria-label="caption table">
            <TableHead
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              <TableRow>
                <TableCell>{t("prices.id")}</TableCell>
                <TableCellNumber align="right">
                  {t("prices.quantity")}
                </TableCellNumber>
                <TableCellNumber align="right">
                  {t("prices.unitAmout")}
                </TableCellNumber>
                <TableCellNumber align="right">
                  {t("prices.sharePrice")}
                </TableCellNumber>
                <TableCellNumber align="right">
                  {t("prices.discount")}
                </TableCellNumber>
                <TableCellDescription>
                  {t("prices.description")}
                </TableCellDescription>
                <TableCellNumber align="right">
                  {t("prices.investors")}
                </TableCellNumber>
                <TableCellNumber align="right">
                  {t("prices.sold")}
                </TableCellNumber>
                <TableCell align="right">{t("table.actions")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prices.map((price) =>
                price?.unit_amount !== price?.sharePrice ? (
                  <EditProjectBuyingOptionForm
                    key={price.id}
                    projectId={id}
                    scrolled={scroll}
                    {...price}
                  />
                ) : (
                  <EditProjectPriceRow
                    key={price.id}
                    scrolled={scroll}
                    {...price}
                  />
                )
              )}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableContent>
    </Paper>
  );
}
