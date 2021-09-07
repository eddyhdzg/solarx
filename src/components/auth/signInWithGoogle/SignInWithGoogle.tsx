import { Button, Typography } from "@material-ui/core";
import { useCustomAuth } from "hooks";
import GoogleIcon from "@material-ui/icons/Google";
import useStyles from "./signInWithGoogle.jss";

const SignInWithGoogle = () => {
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
        Sign in with Google
      </Typography>
    </Button>
  );
};

export default SignInWithGoogle;
