import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableContainer } from "./ProjectFormNumber.styled";
import { useProjectDiscounts } from "hooks";
import { useParams } from "react-router-dom";
import ExistingDiscountRow from "./existingDiscountRow/ExistingDiscountRow";
import NewDiscountRow from "./newDiscountRow/NewDiscountRow";

interface ProjectID {
  id?: string;
}

export default function ProjectFormNumber() {
  const { id } = useParams<ProjectID>();
  const { data } = useProjectDiscounts(id || "");

  return (
    <div>
      <Paper>
        <Box
          sx={{
            p: 2,
          }}
        >
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography variant="h6" component="h6">
              Discount codes
            </Typography>
            <Typography variant="subtitle3" color="textSecondary">
              Discount code for the early investors.
            </Typography>
          </Box>

          <StyledTableContainer>
            <Table aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell
                    sx={{
                      minWidth: 200,
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 300,
                    }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      minWidth: 120,
                    }}
                  >
                    Discount
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      minWidth: 120,
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell align="right">Sold</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <ExistingDiscountRow key={row.id} projectId={id} {...row} />
                ))}
                <NewDiscountRow projectId={id} />
              </TableBody>
            </Table>
          </StyledTableContainer>
        </Box>
      </Paper>
    </div>
  );
}
