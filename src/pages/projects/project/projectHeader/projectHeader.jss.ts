import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectHeader_header: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    projectHeader_buttonsContainer: {
      marginTop: theme.spacing(1),
      marginLeft: "auto",
    },
    projectHeader_shareButton: {
      marginRight: theme.spacing(2),
    },
    projectHeader_icon: {
      marginLeft: theme.spacing(1),
    },
  })
);

export default useStyles;
