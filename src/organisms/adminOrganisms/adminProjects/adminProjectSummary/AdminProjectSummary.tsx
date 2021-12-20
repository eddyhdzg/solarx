import { Chip, Paper, Typography } from "@mui/material";
import { useProject } from "hooks";
import { useParams } from "react-router-dom";
import { formatMoney, formatNumber, fomaTimestampWithMinAndSec } from "utils";
import { ProjectIDParams } from "types";
import { useTranslation } from "react-i18next";
import {
  AdminProjectSummaryBody,
  AdminProjectSummaryTitle,
  AdminProjectSummaryDivider,
  AdminProjectSummaryUL,
} from "./AdminProjectSummary.styled";

export default function AdminProjectSummary() {
  const { id } = useParams<ProjectIDParams>();
  const { data } = useProject(id || "");
  const { t } = useTranslation();

  return (
    <Paper>
      <AdminProjectSummaryBody>
        <AdminProjectSummaryTitle variant="h6" component="h6">
          {t("pages.admin.project.summary")}
        </AdminProjectSummaryTitle>
        <Typography variant="subtitle1" gutterBottom>
          {t("pages.admin.project.general")}
        </Typography>
        <AdminProjectSummaryUL>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.admin.project.status")}
            </Typography>
            <Chip label={data?.status} variant="yellow" size="small" />
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.admin.project.goal")}
            </Typography>
            <Typography variant="subtitle2">
              {formatMoney(data?.goal || 0)}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.admin.project.investors")}
            </Typography>
            <Typography variant="subtitle2">
              {formatNumber(data?.investors || 0)}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.admin.project.images")}
            </Typography>
            <Typography variant="subtitle2">
              {data?.images?.length || 0}
            </Typography>
          </li>
        </AdminProjectSummaryUL>
        <AdminProjectSummaryDivider />

        <Typography variant="subtitle1" gutterBottom>
          {t("pages.admin.project.dates")}
        </Typography>
        <AdminProjectSummaryUL>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.admin.project.created")}
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.created ? fomaTimestampWithMinAndSec(data?.created) : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.admin.project.releaseDate")}
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.releaseDate
                ? fomaTimestampWithMinAndSec(data?.releaseDate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.admin.project.funded")}
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.fundedDate
                ? fomaTimestampWithMinAndSec(data?.fundedDate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.admin.project.operationDate")}
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.operationDate
                ? fomaTimestampWithMinAndSec(data?.operationDate)
                : "-"}
            </Typography>
          </li>
        </AdminProjectSummaryUL>
      </AdminProjectSummaryBody>
    </Paper>
  );
}
