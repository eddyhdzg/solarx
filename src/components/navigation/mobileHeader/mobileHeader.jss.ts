import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileHeader_root: {
      boxShadow: "rgb(0 0 0 / 20%) 0px 6px 6px -1px",
    },
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
