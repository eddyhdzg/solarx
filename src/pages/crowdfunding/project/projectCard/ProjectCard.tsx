import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import {
  formatMoney,
  formatPercentage,
  formatPercentage2Dec,
  formatNumber,
  fomatNumInYears,
} from "utils";
import { useSigninCheck } from "reactfire";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { GradientLinearProgress } from "components";
import { Project } from "types";
import { useTranslation } from "react-i18next";

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

  return (
    <Card
      sx={{
        maxWidth: (theme) => theme.spacing(60),
        borderRadius: 2.5,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: (theme) => theme.palette.grey[800],
        boxShadow: 8,
        zIndex: 1,
        m: {
          xxs: "auto",
          lg: "unset",
        },
      }}
    >
      <CardContent
        sx={{
          p: 4,
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h5" component="h4">
              {formatPercentage(percentage)} {t("projects.funded")}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {formatNumber(sharesSold)} / {formatNumber(totalShares)}{" "}
              {t("projects.shares")}
            </Typography>
          </Box>
          <Box
            sx={{
              my: 1,
            }}
          >
            <GradientLinearProgress value={percentage} />
          </Box>
          <Typography variant="body3" color="textSecondary">
            {formatMoney(sharePrice * sharesSold)}{" "}
            {t("pages.crowdfunding.project.raisedOf")}{" "}
            {formatMoney(sharePrice * totalShares)}
          </Typography>
        </div>
        <Divider
          sx={{
            my: 5,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: -3,
            "& > div": {
              mt: 3,
            },
            "& > div:not(:last-child)": {
              mr: 4,
            },
          }}
        >
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
        </Box>
        <Divider
          sx={{
            my: 5,
          }}
        />
        <ul>
          <Box
            component="li"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
              "&:not(:last-child)": {
                mb: 3,
              },
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {t("projects.shares")}
            </Typography>
            <ButtonGroup color="inherit">
              <Button
                disabled={shares <= 1}
                onClick={() => handleChangeShares(-1)}
              >
                <RemoveRoundedIcon />
              </Button>
              <Button
                disabled
                sx={{
                  color: "inherit !important",
                  px: 0,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    minWidth: (theme) => theme.spacing(5),
                  }}
                >
                  {shares}
                </Box>
              </Button>

              <Button onClick={() => handleChangeShares(1)}>
                <AddRoundedIcon />
              </Button>
            </ButtonGroup>
          </Box>

          <Box
            component="li"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
              "&:not(:last-child)": {
                mb: 3,
              },
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {t("pages.crowdfunding.project.monthlyRevenue")}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              {formatMoney((sharePrice * roi * 0.01 * shares) / 12)}
            </Typography>
          </Box>

          <Box
            component="li"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
              "&:not(:last-child)": {
                mb: 3,
              },
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {t("pages.crowdfunding.project.yearlyRevenue")}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              {formatMoney(sharePrice * roi * 0.01 * shares)}
            </Typography>
          </Box>
        </ul>
      </CardContent>
      <CardActions
        sx={{
          backgroundImage: (theme) => theme.custom.elevation[1],
          p: 4,
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            mb: 3,
          }}
        >
          <Box
            component="li"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
              "&:not(:last-child)": {
                mb: 3,
              },
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {t("pages.crowdfunding.project.price")}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              {formatMoney(sharePrice * shares)}
            </Typography>
          </Box>
        </Box>

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
      </CardActions>
    </Card>
  );
}
