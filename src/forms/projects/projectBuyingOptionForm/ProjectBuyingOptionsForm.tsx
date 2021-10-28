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
import CreateProjectBuyingOptionForm from "./createProjectBuyingOptionForm/CreateProjectBuyingOptionForm";
import EditProjectBuyingOptionForm from "./editProjectBuyingOptionForm/EditProjectBuyingOptionForm";
import {
  Titles,
  StyledTableContainer,
  TableContent,
  TableCellID,
  TableCellDescription,
  TableCellNumber,
} from "../ProjectForms.styled";

interface ProjectID {
  id?: string;
}

export default function ProjectBuyingOptionsForm() {
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

        <StyledTableContainer ref={ref}>
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
                <EditProjectBuyingOptionForm
                  key={row.id}
                  projectId={id}
                  scrolled={scroll}
                  {...row}
                />
              ))}
              <CreateProjectBuyingOptionForm projectId={id} scrolled={scroll} />
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableContent>
    </Paper>
  );
}
