import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useProjectBuyingOptions, useScrollRight } from "hooks";
import { useParams } from "react-router-dom";
import {
  Titles,
  StyledTableContainer,
  TableContent,
  TableCellID,
  TableCellDescription,
  TableCellNumber,
} from "../ProjectForms.styled";
import CreateBuyingOptionsFormContext from "./createBuyingOptionsForm/CreateBuyingOptionsFormContext";
import EditBuyingOptionsFormContext from "./editBuyingOptionsForm/EditBuyingOptionsFormContext";

interface ProjectID {
  id?: string;
}

export default function ProjectBuyingOptionFormLayout() {
  const { id } = useParams<ProjectID>();
  const { data } = useProjectBuyingOptions(id || "");
  const [ref, scroll] = useScrollRight();

  return (
    <Paper>
      <TableContent>
        <Titles>
          <Typography variant="h6" component="h6">
            Buying options
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
            Buying options for the early investors or for the general public.
          </Typography>
        </Titles>

        <StyledTableContainer ref={ref as any}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCellID>Title</TableCellID>
                <TableCellID>Subtitle</TableCellID>
                <TableCellDescription>Description</TableCellDescription>
                <TableCellNumber align="right">Discount</TableCellNumber>
                <TableCellNumber align="right">Quantity</TableCellNumber>
                <TableCell align="right">Sold</TableCell>
                <TableCellNumber align="right">Investors</TableCellNumber>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <EditBuyingOptionsFormContext
                  key={row.id}
                  projectId={id}
                  scrolled={scroll}
                  {...row}
                />
              ))}
              <CreateBuyingOptionsFormContext
                projectId={id}
                scrolled={scroll}
              />
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableContent>
    </Paper>
  );
}
