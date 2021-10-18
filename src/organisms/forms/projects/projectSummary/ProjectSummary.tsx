import { Chip, Paper, Typography } from "@mui/material";
import { useProject } from "hooks";
import { useParams } from "react-router-dom";
import { formatMoney, formatNumber, fomatTimeStampWithMinAndSec } from "utils";
import {
  ProjectSummaryBody,
  ProjectSummaryTitle,
  ProjectSummaryDivider,
  ProjectSummaryUL,
} from "./ProjectSummary.styled";

interface ProjectID {
  id?: string;
}

export default function ProjectSummary() {
  const { id } = useParams<ProjectID>();
  const { data } = useProject(id || "");

  return (
    <Paper>
      <ProjectSummaryBody>
        <ProjectSummaryTitle variant="h6" component="h6">
          Summary
        </ProjectSummaryTitle>
        <Typography variant="subtitle1" gutterBottom>
          General
        </Typography>
        <ProjectSummaryUL>
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
              {(data?.images?.length || 0) + (data?.coverImage ? 1 : 0)}
            </Typography>
          </li>
        </ProjectSummaryUL>
        <ProjectSummaryDivider />

        <Typography variant="subtitle1" gutterBottom>
          Dates
        </Typography>
        <ProjectSummaryUL>
          <li>
            <Typography variant="body2" color="textSecondary">
              Created Date
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.created ? fomatTimeStampWithMinAndSec(data?.created) : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Last Update
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.lastUpdate
                ? fomatTimeStampWithMinAndSec(data?.lastUpdate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Release Date
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.releaseDate
                ? fomatTimeStampWithMinAndSec(data?.releaseDate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Funded Date
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.fundedDate
                ? fomatTimeStampWithMinAndSec(data?.fundedDate)
                : "-"}
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="textSecondary">
              Operation Date
            </Typography>
            <Typography variant="subtitle2" textAlign="right">
              {data?.operationDate
                ? fomatTimeStampWithMinAndSec(data?.operationDate)
                : "-"}
            </Typography>
          </li>
        </ProjectSummaryUL>
      </ProjectSummaryBody>
    </Paper>
  );
}
