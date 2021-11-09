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
import {
  Titles,
  StyledTableContainer,
  TableContent,
  TableCellDescription,
  TableCellNumber,
} from "../ProjectForms.styled";

export default function ProjectBuyingOptionsForm() {
  const { id } = useParams<ProjectIDParams>();
  const { data: prices } = useProjectPrices(id || "");
  const [ref, scroll] = useScrollRight();

  return (
    <Paper>
      <TableContent>
        <Titles>
          <Typography variant="h6" component="h6">
            Prices
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
            Prices for the early investors or for the general public.
          </Typography>
        </Titles>

        <StyledTableContainer ref={ref}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCellNumber align="right">Quantity</TableCellNumber>
                <TableCellNumber align="right">Unit Amount</TableCellNumber>
                <TableCellNumber align="right">Share Price</TableCellNumber>
                <TableCellNumber align="right">Discount</TableCellNumber>
                <TableCellDescription>Description</TableCellDescription>
                <TableCellNumber align="right">Investors</TableCellNumber>
                <TableCellNumber align="right">Sold</TableCellNumber>
                <TableCell align="right">Actions</TableCell>
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
