import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = (xxs: number = 12) =>
  makeStyles((theme: Theme) =>
    createStyles({
      themeSection_grid: {
        [theme.breakpoints.only("xxs")]: {
          flexGrow: 0,
          maxWidth: `${(xxs / 12) * 100}%`,
          flexBasis: `${(xxs / 12) * 100}%`,
        },
      },
    })
  );

export default useStyles;
