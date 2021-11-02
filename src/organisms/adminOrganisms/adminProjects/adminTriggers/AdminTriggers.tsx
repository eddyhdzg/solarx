import {
  Paper,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useScrollRight } from "hooks";
import AdminTriggerGeneralOptionRow from "./adminTriggersRows/AdminTriggerGeneralOptionRow";
import AdminTriggerGoalRow from "./adminTriggersRows/AdminTriggerGoalRow";
import AdminTriggerShares from "./adminTriggersRows/AdminTriggerShares";
import Styles from "./AdminTriggers.styled";

export default function AdminTriggers() {
  const [ref, scroll] = useScrollRight();

  return (
    <Paper>
      <Styles.Body>
        <div>
          <Typography variant="h6" component="h6" gutterBottom>
            Triggers
          </Typography>
          <Styles.Subtitle
            variant="subtitle3"
            color="textSecondary"
            component="p"
          >
            Trigger functions on user command to update the project's data.
          </Styles.Subtitle>
        </div>
        <TableContainer ref={ref}>
          <Styles.Table aria-label="triggers table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="right">Current</TableCell>
                <TableCell align="right">New</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              <AdminTriggerGeneralOptionRow scrolled={scroll} />
              <AdminTriggerGoalRow scrolled={scroll} />
              <AdminTriggerShares scrolled={scroll} />
            </TableBody>
          </Styles.Table>
        </TableContainer>
      </Styles.Body>
    </Paper>
  );
}
