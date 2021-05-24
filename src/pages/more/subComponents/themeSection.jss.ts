import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    themeSection_selectContainer: {
      [theme.breakpoints.up("md")]: {
        maxWidth: 300,
      },
    },
  })
);

export default useStyles;
