import { Chip, Paper, Typography } from "@mui/material";
import { useProject } from "hooks";
import { useParams } from "react-router-dom";
import { formatMoney, formatNumber, formatTimestampWithMinAndSec } from "utils";
import { ProjectIDParams } from "solarx-types";
import { useTranslation } from "react-i18next";
import {
  AdminProjectSummaryBody,
  AdminProjectSummaryTitle,
  AdminProjectSummaryDivider,
  AdminProjectSummaryUL,
} from "./AdminProjectSummary.styled";

export default function AdminProjectSummary() {
  const { id = "" } = useParams<ProjectIDParams>();
  const { data } = useProject(id);
  const { t } = useTranslation();
  const investors = data?.investors || 0;

  return (
    <Paper>
      <AdminProjectSummaryBody>
        <AdminProjectSummaryTitle variant="h6" component="h6">
          {t("projects.summary")}
        </AdminProjectSummaryTitle>
        <Typography variant="subtitle1" gutterBottom>
          {t("projects.general")}
        </Typography>
        <AdminProjectSummaryUL>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.status")}
            </Typography>
            <Chip label={data?.status} variant="yellow" size="small" />
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.goal")}
            </Typography>
            <Typography variant="subtitle2">
              {formatMoney(data?.goal || 0)}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("common.investor-plural", {
                count: investors,
              })}
            </Typography>
            <Typography variant="subtitle2">
              {formatNumber(investors)}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.images")}
            </Typography>
            <Typography variant="subtitle2">
              {data?.images?.length || 0}
            </Typography>
          </li>
        </AdminProjectSummaryUL>
        <AdminProjectSummaryDivider />
        <Typography variant="subtitle1" gutterBottom>
          {t("projects.dates")}
        </Typography>
        <AdminProjectSummaryUL>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.created")}
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.created
                ? formatTimestampWithMinAndSec(data?.created)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.releaseDate")}
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.releaseDate
                ? formatTimestampWithMinAndSec(data?.releaseDate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.funded")}
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.fundedDate
                ? formatTimestampWithMinAndSec(data?.fundedDate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.operationDate")}
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.operationDate
                ? formatTimestampWithMinAndSec(data?.operationDate)
                : "-"}
            </Typography>
          </li>
        </AdminProjectSummaryUL>
      </AdminProjectSummaryBody>
    </Paper>
  );
}
