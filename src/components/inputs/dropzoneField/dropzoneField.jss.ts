import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropzone_root: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      minHeight: theme.spacing(10),
      borderRadius: theme.spacing(0.5),
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    dropzone_icon: {
      marginBottom: theme.spacing(2),
    },
  })
);

export default useStyles;
