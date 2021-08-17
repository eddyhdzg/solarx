import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gradientLinearProgress_progressBarRoot: {
      height: theme.spacing(1),
      borderRadius: 5,
    },
    gradientLinearProgress_progressBarColorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    gradientLinearProgress_bar: {
      borderRadius: 5,
      background: theme.custom.gradient,
    },
  })
);

export default useStyles;
