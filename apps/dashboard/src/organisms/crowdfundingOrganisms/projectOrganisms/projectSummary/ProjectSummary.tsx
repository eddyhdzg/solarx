import { useState } from "react";
import { Typography } from "@mui/material";
import {
  formatMoney,
  formatPercentage,
  formatPercentage2Dec,
  formatNumber,
  fomatNumInYears,
  formatllllCST,
} from "utils";
import { Counter, GradientLinearProgress } from "atomic";
import { Project } from "solarx-types";
import { useTranslation } from "react-i18next";
import {
  ProjectSummaryHeader,
  ProjectSummaryProgressWrapper,
  ProjectSummaryStyledDivider,
  ProjectSummaryStatsWrapper,
  ProjectSummaryLi,
  ProjectSummarySubtitle,
  ProjectSummaryDateIcon,
} from "./ProjectSummary.styled";

interface IProjectSummaryProps
  extends Pick<
    Project,
    | "goal"
    | "investors"
    | "raised"
    | "roi"
    | "panelsSold"
    | "totalPanels"
    | "basePrice"
    | "releaseDate"
  > {}

export default function ProjectSummary({
  goal = 0,
  investors = 0,
  roi = 0,
  raised = 0,
  basePrice = 0,
  panelsSold = 0,
  totalPanels = 1,
  releaseDate,
}: IProjectSummaryProps) {
  const { t } = useTranslation();
  const progress = Math.trunc((panelsSold / totalPanels) * 100);
  const [panels, setPanels] = useState(1);
  const handleChangePanels = (num: number) => {
    setPanels(panels + num);
  };
  const max = totalPanels;
  const error = panels < 1 || panels > max;
  const displayPanelPrice = basePrice;
  const yearlyRevenue = displayPanelPrice * roi * 0.01 * panels;
  const monthlyRevenue = yearlyRevenue / 12;
  const numInYears = basePrice / ((basePrice * roi * 0.01) / 12) / 12;

  return (
    <div>
      <div>
        <ProjectSummaryHeader>
          <Typography variant="h5" component="h4">
            {formatPercentage(progress)}{" "}
            {t("projects.funded", {
              postProcess: "capitalize",
            })}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {formatNumber(panelsSold)} / {formatNumber(totalPanels)}{" "}
            {t("projects.panels")}
          </Typography>
        </ProjectSummaryHeader>
        <ProjectSummaryProgressWrapper>
          <GradientLinearProgress value={progress} />
        </ProjectSummaryProgressWrapper>
        <Typography variant="body3" color="textSecondary">
          {`${formatMoney(raised)} ${t(
            "pages.crowdfunding.project.raisedOf"
          )} ${formatMoney(goal)}`}
        </Typography>
      </div>
      <ProjectSummaryStyledDivider />
      <ProjectSummaryStatsWrapper>
        <div>
          <Typography variant="h6">{formatMoney(displayPanelPrice)}</Typography>
          <Typography variant="body2" color="textSecondary">
            {t("projects.basePrice")}
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            {formatPercentage2Dec(roi)}{" "}
            <Typography variant="body3" component="span">
              ({fomatNumInYears(numInYears)})
            </Typography>
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {t("projects.roiShort")}
          </Typography>
        </div>

        <div>
          <Typography variant="h6">{formatNumber(investors)}</Typography>
          <Typography variant="body2" color="textSecondary">
            {t("projects.investors")}
          </Typography>
        </div>
      </ProjectSummaryStatsWrapper>
      <ProjectSummaryStyledDivider />
      <ul>
        <ProjectSummaryLi>
          <Typography variant="body2" color="textSecondary">
            {t("projects.panels", {
              postProcess: "capitalize",
            })}
          </Typography>
          {max > 0 ? (
            <Counter
              panels={panels || 0}
              onChangePanels={handleChangePanels}
              setPanels={setPanels}
              error={error}
              max={max}
            />
          ) : (
            <Typography variant="subtitle1" align="right">
              Sold Out
            </Typography>
          )}
        </ProjectSummaryLi>

        <ProjectSummaryLi>
          <Typography variant="body2" color="textSecondary">
            {t("pages.crowdfunding.project.monthlyRevenue", {
              postProcess: "capitalize",
            })}
          </Typography>
          <Typography variant="subtitle1" align="right">
            {formatMoney(monthlyRevenue)}
          </Typography>
        </ProjectSummaryLi>

        <ProjectSummaryLi>
          <Typography variant="body2" color="textSecondary">
            {t("pages.crowdfunding.project.yearlyRevenue", {
              postProcess: "capitalize",
            })}
          </Typography>
          <Typography variant="subtitle1" align="right">
            {formatMoney(yearlyRevenue)}
          </Typography>
        </ProjectSummaryLi>
      </ul>
      <ProjectSummaryStyledDivider />
      <div>
        <ProjectSummarySubtitle>
          <ProjectSummaryDateIcon />
          <Typography
            variant="body3"
            color="textSecondary"
            sx={{
              mr: 0.5,
            }}
          >
            {t("pages.crowdfunding.project.releaseDate")}
          </Typography>
          <Typography
            variant="body3"
            color="textSecondary"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {formatllllCST(releaseDate?.seconds || 0)}
          </Typography>
        </ProjectSummarySubtitle>
      </div>
    </div>
  );
}
