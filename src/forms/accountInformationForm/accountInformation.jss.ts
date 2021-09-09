import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accountInformation_paper: {
      maxWidth: "56rem",
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    accountInformation_body: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(4),
      },
    },
    accountInformation_avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    accountInformation_section: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    mb2: {
      marginBottom: theme.spacing(2),
    },
    accountInformation_actions: {
      backgroundColor: "rgba(255,255,255,0.08)",
      padding: theme.spacing(2),
      borderEndStartRadius: theme.spacing(0.5),
      borderEndEndRadius: theme.spacing(0.5),
      display: "flex",
      justifyContent: "flex-end",
    },
    accountInformation_textField__success: {
      "& input:valid + fieldset": {
        borderColor: theme.palette.success.dark,
        borderWidth: 2,
      },
    },
  })
);

export default useStyles;
