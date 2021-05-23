import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileHeader_button: {
      textTransform: "capitalize",
      marginLeft: -theme.spacing(2),
    },
    mobileHeader_text: {
      textTransform: "capitalize",
    },
    mobileHeader_toolbar: {
      minHeight: 100,
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
  })
);

export default useStyles;
