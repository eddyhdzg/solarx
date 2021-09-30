import { useState } from "react";
import { Button, Typography } from "@mui/material";
import {
  formatMoney,
  formatPercentage,
  formatPercentage2Dec,
  formatNumber,
  fomatNumInYears,
} from "utils";
import { useSigninCheck } from "reactfire";
import { GradientLinearProgress, Counter } from "components";
import { Project } from "types";
import { useTranslation } from "react-i18next";
import {
  ProjectCardRoot,
  Content,
  Header,
  ProgressWrapper,
  StyledDivider,
  StatsWrapper,
  StyledCardActions,
  Li,
  Ul,
} from "./ProjectCard.styled";

interface IProjectCardProps
  extends Pick<Project, "sharesSold" | "totalShares" | "sharePrice"> {
  roi?: number;
  investors?: number;
}

export default function ProjectCard({
  sharesSold = 0,
  totalShares = 1,
  sharePrice = 0,
  roi = 0,
  investors = 0,
}: IProjectCardProps) {
  const { t } = useTranslation();
  const percentage = (sharesSold / totalShares) * 100;
  const { data: signinResult } = useSigninCheck();
  const [shares, setShares] = useState(1);
  const handleChangeShares = (num: number) => {
    setShares(shares + num);
  };
  const max = totalShares - sharesSold;
  const error = shares < 1 || shares > max;

  return (
    <ProjectCardRoot>
      <Content>
        <div>
          <Header>
            <Typography variant="h5" component="h4">
              {formatPercentage(percentage)} {t("projects.funded")}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {formatNumber(sharesSold)} / {formatNumber(totalShares)}{" "}
              {t("projects.shares")}
            </Typography>
          </Header>
          <ProgressWrapper>
            <GradientLinearProgress value={percentage} />
          </ProgressWrapper>
          <Typography variant="body3" color="textSecondary">
            {formatMoney(sharePrice * sharesSold)}{" "}
            {t("pages.crowdfunding.project.raisedOf")}{" "}
            {formatMoney(sharePrice * totalShares)}
          </Typography>
        </div>
        <StyledDivider />
        <StatsWrapper>
          <div>
            <Typography variant="h6">{formatMoney(sharePrice)}</Typography>
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
        </StatsWrapper>
        <StyledDivider />
        <ul>
          <Li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.shares")}
            </Typography>
            {max ? (
              <Counter
                shares={shares}
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
          </Li>

          <Li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.crowdfunding.project.monthlyRevenue")}
            </Typography>
            <Typography variant="subtitle1" align="right">
              {formatMoney((sharePrice * roi * 0.01 * shares) / 12)}
            </Typography>
          </Li>

          <Li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.crowdfunding.project.yearlyRevenue")}
            </Typography>
            <Typography variant="subtitle1" align="right">
              {formatMoney(sharePrice * roi * 0.01 * shares)}
            </Typography>
          </Li>
        </ul>
      </Content>
      <StyledCardActions>
        <Ul>
          <Li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.crowdfunding.project.price")}
            </Typography>
            <Typography variant="subtitle1" noWrap>
              {formatMoney(sharePrice * shares)}
            </Typography>
          </Li>
        </Ul>

        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={!signinResult?.signedIn}
        >
          {signinResult?.signedIn
            ? t("pages.crowdfunding.project.goToCheckout")
            : t("pages.crowdfunding.project.signInToProceedToPayment")}
        </Button>
      </StyledCardActions>
    </ProjectCardRoot>
  );
}
