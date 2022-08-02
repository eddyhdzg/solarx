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
import { ProjectIDParams } from "solarx-types";
import { useTranslation } from "react-i18next";
import EditProjectBuyingOptionForm from "./editProjectPriceForm/EditProjectPriceForm";
import StandardProjectPriceRow from "./standardProjectPriceRow/StandardProjectPriceRow";
import {
  Titles,
  StyledTableContainer,
  TableContent,
  TableCellDescription,
  TableCellNumber,
} from "../ProjectForms.styled";

export default function EditProjectPricesForm() {
  const { id = "" } = useParams<ProjectIDParams>();
  const { data: prices } = useProjectPrices(id);
  const [ref, scroll] = useScrollRight();
  const { t } = useTranslation();

  return (
    <Paper>
      <TableContent>
        <Titles>
          <Typography variant="h6" component="h6">
            {t("projects.prices")}
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
                <TableCell>{t("common.id")}</TableCell>
                <TableCellNumber align="right">
                  {t("projects.quantity")}
                </TableCellNumber>
                <TableCellNumber align="right">
                  {t("projects.salePrice")}
                </TableCellNumber>
                <TableCellNumber align="right">
                  {t("projects.basePrice")}
                </TableCellNumber>
                <TableCellNumber align="right">
                  {t("projects.discount")}
                </TableCellNumber>
                <TableCellDescription>
                  {t("projects.description")}
                </TableCellDescription>
                <TableCellNumber align="right">
                  {t("common.investors")}
                </TableCellNumber>
                <TableCellNumber align="right">
                  {t("projects.sold")}
                </TableCellNumber>
                <TableCell align="right">{t("table.actions")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prices.map((price) =>
                price?.unit_amount !== price?.basePrice ? (
                  <EditProjectBuyingOptionForm
                    key={price.id}
                    projectId={id}
                    scrolled={scroll}
                    {...price}
                  />
                ) : (
                  <StandardProjectPriceRow
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
