import { Paper, Typography } from "@material-ui/core";
import { Link, LinkProps } from "react-router-dom";
import useStyles from "./sectionButton.jss";

interface ISectionButtonProps {
  title: string;
  to: LinkProps["to"];
  emoji: string;
}

export default function SectionButton({
  title,
  to,
  emoji,
}: ISectionButtonProps) {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.link}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6">{emoji}</Typography>
        <Typography noWrap variant="subtitle1">
          {title}
        </Typography>
      </Paper>
    </Link>
  );
}
