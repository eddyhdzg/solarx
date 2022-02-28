import { AppBar, Box, Toolbar, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import Logo from "assets/images/logo-combination.png";
import { CTA } from "components";

export default function Header() {
  const { t } = useTranslation();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        pt: 3,
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={Logo}
          sx={{
            width: {
              xxs: 120,
              sm: 140,
            },
          }}
          alt="logo"
        />

        <Link
          component="a"
          href="https://dashboard.solarx.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CTA variant="contained" size="large" type="submit">
            {t("translation:pages.landing.viewDemo")}
          </CTA>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
