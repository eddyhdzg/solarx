import { Button, Typography } from "@material-ui/core";
import { useCustomAuth } from "hooks";
import GoogleIcon from "@material-ui/icons/Google";
import useStyles from "./signInWithGoogle.jss";
import { useTranslation } from "react-i18next";

const SignInWithGoogle = () => {
  const { t } = useTranslation();
  const { signIn } = useCustomAuth();
  const classes = useStyles();
  return (
    <Button
      onClick={() => signIn()}
      className={classes.signInWithGoogle_button}
      startIcon={<GoogleIcon />}
      size="small"
    >
      <Typography
        variant="button"
        noWrap
        className={classes.accountButton_text}
      >
        {t("auth.signInWithGoogle")}
      </Typography>
    </Button>
  );
};

export default SignInWithGoogle;
