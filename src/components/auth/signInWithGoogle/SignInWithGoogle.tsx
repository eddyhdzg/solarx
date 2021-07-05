import * as firebaseui from "firebaseui";
import { useAuth } from "reactfire";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Props } from "react-firebaseui/index";
import useStyles from "./signInWithGoogle.jss";

const SignInWithGoogle = () => {
  const classes = useStyles();
  const auth = useAuth;

  const uiConfig: Props["uiConfig"] = {
    signInFlow: "popup",
    signInOptions: [
      {
        provider: auth.GoogleAuthProvider.PROVIDER_ID,
        clientId:
          "404633824290-m3d2qk21r90jfgdg4rnj62gacapdt1tv.apps.googleusercontent.com",
        customParameters: {
          prompt: "select_account",
        },
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
  };

  return (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={auth()}
      className={classes.accountButton_test}
    />
  );
};

export default SignInWithGoogle;
