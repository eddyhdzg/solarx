import { useState } from "react";
import { CardActionArea, CardContent, Typography } from "@mui/material";
import { Project } from "types";
import { Link } from "react-router-dom";
import { GradientLinearProgress } from "components";
import { useTranslation } from "react-i18next";
import { formatPercentage2Dec } from "utils";
import {
  ProjectCardCard,
  ProjectSkeleton,
  ProjectCardMedia,
  ProjectCardHeaders,
  ProjectCardDataRow,
  ProjectCardDataColumn,
  SellOutlinedIcon,
  ProjectCardDataTextWrapper,
  SavingsOutlinedIcon,
  ProjectCardSummary,
  SharesTypography,
} from "./ProjectCard.styled";

interface IProjectCardProps extends Project {
  url: string;
}

export default function ProjectCard({
  // id,
  city,
  state,
  name,
  sharesSold = 0,
  sharePrice = 0,
  totalShares = 0,
  roi = 0,
  coverImage,
  url = "/crowdfunding/projects/",
}: IProjectCardProps) {
  const { t } = useTranslation();
  const progress = Math.floor((sharesSold / totalShares) * 100);
  const [loading, setLoading] = useState(true);

  return (
    <ProjectCardCard>
      <CardActionArea component={Link} to={url}>
        <ProjectSkeleton
          animation="wave"
          variant="rectangular"
          height={160}
          loading={loading}
        />
        <ProjectCardMedia
          component="img"
          src={coverImage || undefined}
          alt={`project-${name}-img`}
          onLoad={() => setLoading(false)}
          loading={loading}
        />
        <CardContent>
          <ProjectCardHeaders>
            <Typography variant="h5" component="span">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {city}, {state}
            </Typography>
          </ProjectCardHeaders>

          <ProjectCardDataRow>
            <ProjectCardDataColumn>
              <SellOutlinedIcon />
              <ProjectCardDataTextWrapper>
                <Typography variant="subtitle1">
                  {sharePrice.toLocaleString()} MX
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {t("projects.sharePrice")}
                </Typography>
              </ProjectCardDataTextWrapper>
            </ProjectCardDataColumn>
            <ProjectCardDataColumn>
              <SavingsOutlinedIcon />
              <ProjectCardDataTextWrapper>
                <Typography variant="subtitle1">
                  {formatPercentage2Dec(roi)}
                </Typography>
                <Typography variant="caption" color="textSecondary" noWrap>
                  {t("projects.roi")}
                </Typography>
              </ProjectCardDataTextWrapper>
            </ProjectCardDataColumn>
          </ProjectCardDataRow>
          <ProjectCardSummary>
            <Typography variant="body1">
              {progress}% {t("projects.funded")}
            </Typography>
            <SharesTypography variant="caption" color="textSecondary">
              {sharesSold.toLocaleString()} / {totalShares.toLocaleString()}{" "}
              {t("projects.shares")}
            </SharesTypography>
          </ProjectCardSummary>
          <GradientLinearProgress value={progress} />
        </CardContent>
      </CardActionArea>
    </ProjectCardCard>
  );
}
