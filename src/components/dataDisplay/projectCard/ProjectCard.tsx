import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Project } from "types";
import useStyles from "./projectCard.jss";
import SellOutlinedIcon from "@material-ui/icons/SellOutlined";
import SavingsOutlinedIcon from "@material-ui/icons/SavingsOutlined";
import { Link } from "react-router-dom";
import GradientLinearProgress from "../gradientLinearProgress/GradientLinearProgress";

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
  ror,
  coverImage,
  url = "/crowdfunding/projects/",
}: IProjectCardProps) {
  const classes = useStyles();
  const progress = Math.floor((sharesSold / totalShares) * 100);
  const [loading, setLoading] = useState(true);

  return (
    <Card className={classes.projectCard_root}>
      <CardActionArea component={Link} to={url}>
        <Skeleton
          animation="wave"
          variant="rect"
          height={160}
          className={loading ? undefined : classes.projectCard_media__loaded}
        />
        <CardMedia
          component="img"
          src={coverImage || undefined}
          alt={`project-${name}-img`}
          onLoad={() => setLoading(false)}
          className={[
            classes.projectCard_media,
            loading ? classes.projectCard_media__loaded : undefined,
          ].join(" ")}
        />
        <CardContent>
          <div className={classes.projectCard_header}>
            <Typography variant="h5" component="span">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {city}, {state}
            </Typography>
          </div>

          <div className={classes.projectCard_data}>
            <div className={classes.projectCard_dataCol}>
              <SellOutlinedIcon className={classes.projectCard_icon} />
              <div className={classes.projectCard_noWrap}>
                <Typography
                  variant="subtitle1"
                  className={classes.projectCard_subtitle}
                >
                  {sharePrice.toLocaleString()} MX
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Share Price
                </Typography>
              </div>
            </div>
            <div className={classes.projectCard_dataCol}>
              <SavingsOutlinedIcon className={classes.projectCard_icon} />
              <div className={classes.projectCard_noWrap}>
                <Typography
                  variant="subtitle1"
                  className={classes.projectCard_subtitle}
                >
                  {ror}%
                </Typography>
                <Typography variant="caption" color="textSecondary" noWrap>
                  RoR (rate of return)
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.projectCard_progress}>
            <Typography variant="body1">{progress}% founded</Typography>
            <Typography variant="caption" color="textSecondary">
              {sharesSold.toLocaleString()} / {totalShares.toLocaleString()}{" "}
              shares
            </Typography>
          </div>
          <GradientLinearProgress value={progress} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
