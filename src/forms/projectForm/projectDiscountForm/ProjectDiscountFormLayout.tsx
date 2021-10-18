import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useProjectDiscounts } from "hooks";
import { useParams } from "react-router-dom";
import {
  Titles,
  StyledTableContainer,
  TableContent,
  TableCellID,
  TableCellDescription,
  TableCellNumber,
} from "../ProjectForms.styled";
import CreateDiscountFormContext from "./createDiscountForm/CreateDiscountFormContext";
import EditDiscountFormContext from "./editDiscountForm/EditDiscountFormContext";

interface ProjectID {
  id?: string;
}

export default function ProjectDiscountFormLayout() {
  const { id } = useParams<ProjectID>();
  const { data } = useProjectDiscounts(id || "");

  return (
    <Paper>
      <TableContent>
        <Titles>
          <Typography variant="h6" component="h6">
            Discount codes
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
            Discount code for the early investors.
          </Typography>
        </Titles>

        <StyledTableContainer>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCellID>Name</TableCellID>
                <TableCellDescription>Description</TableCellDescription>
                <TableCellNumber align="right">Discount</TableCellNumber>
                <TableCellNumber align="right">Quantity</TableCellNumber>
                <TableCell align="right">Sold</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <EditDiscountFormContext key={row.id} projectId={id} {...row} />
              ))}
              <CreateDiscountFormContext projectId={id} />
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableContent>
    </Paper>
  );
}
