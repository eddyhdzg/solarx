import { Chip, Paper, Typography } from "@mui/material";
import { useProject } from "hooks";
import { useParams } from "react-router-dom";
import { formatMoney, formatNumber, fomaTimestampWithMinAndSec } from "utils";
import { ProjectIDParams } from "types";
import {
  AdminProjectSummaryBody,
  AdminProjectSummaryTitle,
  AdminProjectSummaryDivider,
  AdminProjectSummaryUL,
} from "./AdminProjectSummary.styled";

export default function AdminProjectSummary() {
  const { id } = useParams<ProjectIDParams>();
  const { data } = useProject(id || "");

  return (
    <Paper>
      <AdminProjectSummaryBody>
        <AdminProjectSummaryTitle variant="h6" component="h6">
          Summary
        </AdminProjectSummaryTitle>
        <Typography variant="subtitle1" gutterBottom>
          General
        </Typography>
        <AdminProjectSummaryUL>
          <li>
            <Typography variant="body2" color="textSecondary">
              Status*
            </Typography>
            <Chip label={data?.status} variant="yellow" size="small" />
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Goal
            </Typography>
            <Typography variant="subtitle2">
              {formatMoney(data?.goal || 0)}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Investors
            </Typography>
            <Typography variant="subtitle2">
              {formatNumber(data?.investors || 0)}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Images
            </Typography>
            <Typography variant="subtitle2">
              {data?.images?.length || 0}
            </Typography>
          </li>
        </AdminProjectSummaryUL>
        <AdminProjectSummaryDivider />

        <Typography variant="subtitle1" gutterBottom>
          Dates
        </Typography>
        <AdminProjectSummaryUL>
          <li>
            <Typography variant="body2" color="textSecondary">
              Created Date
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.created ? fomaTimestampWithMinAndSec(data?.created) : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Release Date
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.releaseDate
                ? fomaTimestampWithMinAndSec(data?.releaseDate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Funded Date
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.fundedDate
                ? fomaTimestampWithMinAndSec(data?.fundedDate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Operation Date
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
