import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectFormBody_form: {
      "& >*": {
        marginBottom: theme.spacing(3),
      },
    },
    projectFormBody_header: {
      marginBottom: theme.spacing(3),
    },
    projectFormBody_body: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    projectFormBody_divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    projectFormBody_actions: {
      backgroundColor: "rgba(255,255,255,0.08)",
      padding: theme.spacing(2),
      borderEndStartRadius: theme.spacing(0.5),
      borderEndEndRadius: theme.spacing(0.5),
      display: "flex",
      justifyContent: "flex-end",
    },
    projectFormBody_textField__success: {
      "& input:valid + fieldset": {
        borderColor: "green",
        borderWidth: 2,
      },
    },
    projectFormBody_select__success: {
      "& input:valid + div + fieldset": {
        borderColor: "green",
        borderWidth: 2,
      },
    },
  })
);

export default useStyles;
