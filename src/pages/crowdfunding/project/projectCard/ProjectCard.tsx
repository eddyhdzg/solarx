import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import useStyles from "./projectCard.jss";
import {
  formatMoney,
  formatPercentage,
  formatPercentage2Dec,
  formatNumber,
  fomatNumInYears,
} from "utils";
import { useSigninCheck } from "reactfire";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { GradientLinearProgress } from "components";
import { Project } from "types";

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
  const classes = useStyles();
  const percentage = (sharesSold / totalShares) * 100;
  const { data: signinResult } = useSigninCheck();
  const [shares, setShares] = useState(1);

  const handleChangeShares = (num: number) => {
    setShares(shares + num);
  };

  return (
    <Card className={classes.projectCard_root}>
      <CardContent className={classes.projectCard_content}>
        <div>
          <div className={classes.projectCard_progressText}>
            <Typography variant="h5" component="h4">
              {formatPercentage(percentage)} funded
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {formatNumber(sharesSold)} / {formatNumber(totalShares)} shares
            </Typography>
          </div>
          <div className={classes.projectCard_gradientLinearProgress}>
            <GradientLinearProgress value={percentage} />
          </div>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.projectCard_typographyBody2}
          >
            {formatMoney(sharePrice * sharesSold)} raised of{" "}
            {formatMoney(sharePrice * totalShares)}
          </Typography>
        </div>
        <Divider className={classes.projectCard_divider} />
        <div className={classes.projectCard_stats}>
          <div>
            <Typography variant="h6">{formatMoney(sharePrice)}</Typography>
            <Typography variant="body2" color="textSecondary">
              Share price
            </Typography>
          </div>
          <div>
            <Typography variant="h6">
              {formatPercentage2Dec(roi)}{" "}
              <span className={classes.projectCard_text}>
                (
                {fomatNumInYears(
                  sharePrice / ((sharePrice * roi * 0.01) / 12) / 12
                )}
                )
              </span>
            </Typography>

            <Typography variant="body2" color="textSecondary">
              Rate On Investment
            </Typography>
          </div>

          <div>
            <Typography variant="h6">{formatNumber(investors)}</Typography>
            <Typography variant="body2" color="textSecondary">
              Investors
            </Typography>
          </div>
        </div>
        <Divider className={classes.projectCard_divider} />
        <ul className={classes.projectCard_summary}>
          <li className={classes.projectCard_li}>
            <Typography variant="body2" color="textSecondary">
              Shares
            </Typography>
            <ButtonGroup
              color="default"
              className={classes.projectCard_buttonGroup}
            >
              <Button
                disabled={shares <= 1}
                onClick={() => handleChangeShares(-1)}
              >
                <RemoveRoundedIcon />
              </Button>
              <Button disabled className={classes.projectCard_counter}>
                <span className={classes.projectCard_counterSpan}>
                  {shares}
                </span>
              </Button>

              <Button onClick={() => handleChangeShares(1)}>
                <AddRoundedIcon />
              </Button>
            </ButtonGroup>
          </li>

          <li className={classes.projectCard_li}>
            <Typography variant="body2" color="textSecondary">
              Monthly revenue
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.projectCard_typographySubtitle1}
            >
              {formatMoney((sharePrice * roi * 0.01 * shares) / 12)}
            </Typography>
          </li>

          <li className={classes.projectCard_li}>
            <Typography variant="body2" color="textSecondary">
              Yearly revenue
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.projectCard_typographySubtitle1}
            >
              {formatMoney(sharePrice * roi * 0.01)}
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardActions className={classes.projectCard_actions}>
        <ul className={classes.projectCard_price}>
          <li className={classes.projectCard_li}>
            <Typography variant="body2" color="textSecondary">
              Price
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.projectCard_typographySubtitle1}
            >
              {formatMoney(sharePrice * shares)}
            </Typography>
          </li>
        </ul>

        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={!signinResult?.signedIn}
        >
          {signinResult?.signedIn
            ? "Go To Checkout"
            : "Sign in to proceed to payment"}
        </Button>
      </CardActions>
    </Card>
  );
}
