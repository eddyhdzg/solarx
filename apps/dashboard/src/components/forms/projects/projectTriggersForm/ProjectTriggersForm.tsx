import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useScrollRight } from "hooks";
import { useTranslation } from "react-i18next";
import TriggerPanelPrice from "./projectTriggerRows/TriggerPanelPrice";
import TriggerStandardPanelsQuantity from "./projectTriggerRows/TriggerStandardPanelsQuantity";
import TriggerGoal from "./projectTriggerRows/TriggerGoal";
import TriggerGeneratePanels from "./projectTriggerRows/TriggerGeneratePanels";
import {
  Titles,
  StyledTableContainer,
  TableContent,
} from "../ProjectForms.styled";

export default function ProjectTriggersForm() {
  const [ref, scroll] = useScrollRight();
  const { t } = useTranslation();

  return (
    <Paper>
      <TableContent>
        <Titles>
          <Typography variant="h6" component="h6" gutterBottom>
            {t("projects.triggers")}
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
            {t("forms.projectForm.triggersDescription")}
          </Typography>
        </Titles>
        <StyledTableContainer ref={ref}>
          <Table
            aria-label="triggers table"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="right">
                  {t("forms.projectForm.current")}
                </TableCell>
                <TableCell align="right">
                  {t("forms.projectForm.new")}
                </TableCell>
                <TableCell align="right">{t("projects.triggers")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TriggerPanelPrice scrolled={scroll} />
              <TriggerStandardPanelsQuantity scrolled={scroll} />
              <TriggerGoal scrolled={scroll} />
              <TriggerGeneratePanels scrolled={scroll} />
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableContent>
    </Paper>
  );
}
