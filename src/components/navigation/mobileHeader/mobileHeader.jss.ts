import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileHeader_container: {
      padding: theme.spacing(2, 0),
    },
    mobileHeader_button: {
      textTransform: "capitalize",
      marginLeft: theme.spacing(0.5),
    },
    mobileHeader_text: {
      textTransform: "capitalize",
      paddingLeft: theme.spacing(2),
    },
  })
);

export default useStyles;
