import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectTableLayout_root: {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
  })
);

export default useStyles;
