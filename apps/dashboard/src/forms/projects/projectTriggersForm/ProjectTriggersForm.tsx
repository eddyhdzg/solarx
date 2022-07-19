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
import TriggerSharePrice from "./projectTriggerRows/TriggerSharePrice";
import TriggerStandardSharesQuantity from "./projectTriggerRows/TriggerStandardSharesQuantity";
import TriggerGoal from "./projectTriggerRows/TriggerGoal";
import TriggerGenerateShares from "./projectTriggerRows/TriggerGenerateShares";
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
            {t("forms.projectForm.triggers")}
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
                <TableCell align="right">
                  {t("forms.projectForm.triggers")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TriggerSharePrice scrolled={scroll} />
              <TriggerStandardSharesQuantity scrolled={scroll} />
              <TriggerGoal scrolled={scroll} />
              <TriggerGenerateShares scrolled={scroll} />
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableContent>
    </Paper>
  );
}
