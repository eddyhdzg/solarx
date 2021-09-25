import { Button, Typography } from "@mui/material";
import { useCustomAuth } from "hooks";
import GoogleIcon from "@mui/icons-material/Google";
import { useTranslation } from "react-i18next";

const SignInWithGoogle = () => {
  const { t } = useTranslation();
  const { signIn } = useCustomAuth();

  return (
    <Button
      onClick={() => signIn()}
      sx={{
        backgroundColor: "common.black",
        boxShadow: 3,
        p: 1,
        px: {
          xs: 2,
        },
      }}
      startIcon={<GoogleIcon />}
      size="small"
      color="inherit"
    >
      <Typography variant="button" noWrap>
        {t("auth.signInWithGoogle")}
      </Typography>
    </Button>
  );
};

export default SignInWithGoogle;
