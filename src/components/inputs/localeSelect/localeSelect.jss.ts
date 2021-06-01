import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    localeSelect_select: {
      paddingLeft: theme.spacing(6),
    },
    localeSelect_icon: {
      margin: "auto",
      position: "absolute",
      top: "0",
      left: theme.spacing(1.5),
      bottom: 0,
      pointerEvents: "none",
    },
  })
);

export default useStyles;
