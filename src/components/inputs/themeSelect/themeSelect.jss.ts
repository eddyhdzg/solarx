import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    themeSelect_select: {
      paddingLeft: theme.spacing(6),
    },
    themeSelect_icon: {
      margin: "auto",
      position: "absolute",
      top: "0",
      left: theme.spacing(1.5),
      bottom: 0,
      pointerEvents: "none",
    },
    themeSelect_helperText: {
      marginLeft: 0,
    },
  })
);

export default useStyles;
