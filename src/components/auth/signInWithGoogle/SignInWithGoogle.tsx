import { Typography } from "@mui/material";
import { useCustomAuth } from "hooks";
import GoogleIcon from "@mui/icons-material/Google";
import { useTranslation } from "react-i18next";
import { SignInWithGoogleButton } from "./SignInWithGoogle.styled";

const SignInWithGoogle = () => {
  const { t } = useTranslation();
  const { signIn } = useCustomAuth();

  return (
    <SignInWithGoogleButton
      onClick={() => signIn()}
      startIcon={<GoogleIcon />}
      size="small"
      color="inherit"
    >
      <Typography variant="button" noWrap>
        {t("auth.signInWithGoogle")}
      </Typography>
    </SignInWithGoogleButton>
  );
};

export default SignInWithGoogle;
