import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useAuth } from "reactfire";
import useStyles from "./signInButton.jss";

const SignInButton = () => {
  const auth = useAuth;
  const classes = useStyles();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={auth()}
      className={classes.signInForm_button}
    />
  );
};

export default SignInButton;
