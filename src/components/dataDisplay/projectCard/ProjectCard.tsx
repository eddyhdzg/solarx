import { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Skeleton,
} from "@mui/material";
import { Project } from "types";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { Link } from "react-router-dom";
import { GradientLinearProgress } from "components";
import { useTranslation } from "react-i18next";
import { formatPercentage2Dec } from "utils";

interface IProjectCardProps extends Project {
  url: string;
}

export default function ProjectCard({
  id,
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
    <Card
      sx={{
        boxShadow: 3,
        overflow: "visible",
        position: "relative",
        backgroundClip: "padding-box",
        border: "solid 3px transparent",
        borderRadius: "5px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: "-1",
          margin: "-3px",
          borderRadius: "inherit",
          background: (theme) => theme.custom.gradient,
        },
      }}
    >
      <CardActionArea component={Link} to={url}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={160}
          style={{
            display: loading ? undefined : "none",
          }}
        />
        <CardMedia
          component="img"
          src={coverImage || undefined}
          alt={`project-${name}-img`}
          onLoad={() => setLoading(false)}
          sx={{
            height: 160,
            width: "100%",
            display: loading ? "none" : "block",
          }}
        />
        <CardContent>
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography variant="h5" component="span">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {city}, {state}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
              <SellOutlinedIcon
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  mr: 1,
                }}
              />
              <Box
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1">
                  {sharePrice.toLocaleString()} MX
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {t("projects.sharePrice")}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
              <SavingsOutlinedIcon
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  mr: 1,
                }}
              />
              <Box
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1">
                  {formatPercentage2Dec(roi)}
                </Typography>
                <Typography variant="caption" color="textSecondary" noWrap>
                  {t("projects.roi")}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              mb: 1,
            }}
          >
            <Typography variant="body1">
              {progress}% {t("projects.funded")}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{
                textTransform: "lowercase",
              }}
            >
              {sharesSold.toLocaleString()} / {totalShares.toLocaleString()}{" "}
              {t("projects.shares")}
            </Typography>
          </Box>
          <GradientLinearProgress value={progress} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
