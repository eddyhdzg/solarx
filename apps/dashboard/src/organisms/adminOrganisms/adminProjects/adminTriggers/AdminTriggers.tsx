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
import { useTranslation } from "react-i18next";
import AdminTriggerGeneralOptionRow from "./adminTriggersRows/AdminTriggerGeneralOptionRow";
import AdminTriggerGoalRow from "./adminTriggersRows/AdminTriggerGoalRow";
import AdminTriggerPanelPrice from "./adminTriggersRows/AdminTriggerPanelPrice";
import AdminTriggerPanels from "./adminTriggersRows/AdminTriggerPanels";
import Styles from "./AdminTriggers.styled";

export default function AdminTriggers() {
  const [ref, scroll] = useScrollRight();
  const { t } = useTranslation();

  return (
    <Paper>
      <Styles.Body>
        <div>
          <Typography variant="h6" component="h6" gutterBottom>
            {t("forms.projectForm.triggers")}
          </Typography>
          <Styles.Subtitle
            variant="subtitle3"
            color="textSecondary"
            component="p"
          >
            {t("forms.projectForm.triggersDescription")}
          </Styles.Subtitle>
        </div>
        <TableContainer ref={ref}>
          <Styles.Table aria-label="triggers table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="right">
                  {t("forms.projectForm.current")}
                </TableCell>
                <TableCell align="right">
                  {t("forms.projectForm.new")}
                </TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              <AdminTriggerPanelPrice scrolled={scroll} />
              <AdminTriggerGeneralOptionRow scrolled={scroll} />
              <AdminTriggerGoalRow scrolled={scroll} />
              <AdminTriggerPanels scrolled={scroll} />
            </TableBody>
          </Styles.Table>
        </TableContainer>
      </Styles.Body>
    </Paper>
  );
}
