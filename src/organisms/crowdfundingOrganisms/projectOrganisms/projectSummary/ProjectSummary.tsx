import { useState } from "react";
import { Typography } from "@mui/material";
import {
  formatMoney,
  formatPercentage,
  formatPercentage2Dec,
  formatNumber,
  fomatNumInYears,
} from "utils";
import { GradientLinearProgress, Counter } from "components";
import { Project } from "types";
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
    "goal" | "investors" | "roi" | "sharesSold" | "totalShares" | "sharePrice"
  > {
  raised?: number; // FIXME
}

export default function ProjectSummary({
  goal = 0,
  investors = 0,
  roi = 0,
  raised = 0,
  sharePrice = 0,
  sharesSold = 0,
  totalShares = 1,
}: IProjectSummaryProps) {
  const { t } = useTranslation();
  const percentage = (sharesSold / totalShares) * 100;
  const [shares, setShares] = useState(1);
  const handleChangeShares = (num: number) => {
    setShares(shares + num);
  };
  const max = Math.min(totalShares - sharesSold, totalShares);
  const error = shares < 1 || shares > max;
  const displaySharePrice = sharePrice;
  const yearlyRevenue = displaySharePrice * roi * 0.01 * shares;
  const monthlyRevenue = yearlyRevenue / 12;

  return (
    <div>
      <div>
        <ProjectSummaryHeader>
          <Typography variant="h5" component="h4">
            {formatPercentage(percentage)} {t("projects.funded")}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {formatNumber(sharesSold)} / {formatNumber(totalShares)}{" "}
            {t("projects.shares")}
          </Typography>
        </ProjectSummaryHeader>
        <ProjectSummaryProgressWrapper>
          <GradientLinearProgress value={percentage} />
        </ProjectSummaryProgressWrapper>
        <Typography variant="body3" color="textSecondary">
          {formatMoney(raised)} {t("pages.crowdfunding.project.raisedOf")}{" "}
          {formatMoney(goal)}
        </Typography>
      </div>
      <ProjectSummaryStyledDivider />
      <ProjectSummaryStatsWrapper>
        <div>
          <Typography variant="h6">{formatMoney(displaySharePrice)}</Typography>
          <Typography variant="body2" color="textSecondary">
            {t("projects.sharePrice")}
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            {formatPercentage2Dec(roi)}{" "}
            <Typography variant="body3" component="span">
              (
              {fomatNumInYears(
                sharePrice / ((sharePrice * roi * 0.01) / 12) / 12
              )}
              )
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
            {t("projects.shares")}
          </Typography>
          {max > 0 ? (
            <Counter
              shares={shares || 0}
              onChangeShares={handleChangeShares}
              setShares={setShares}
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
            {t("pages.crowdfunding.project.monthlyRevenue")}
          </Typography>
          <Typography variant="subtitle1" align="right">
            {formatMoney(monthlyRevenue)}
          </Typography>
        </ProjectSummaryLi>

        <ProjectSummaryLi>
          <Typography variant="body2" color="textSecondary">
            {t("pages.crowdfunding.project.yearlyRevenue")}
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
          <Typography variant="body3" color="textSecondary">
            Release Date Thu, November 11 2021 7:17 AM CST.
          </Typography>
        </ProjectSummarySubtitle>
      </div>
    </div>
  );
}
