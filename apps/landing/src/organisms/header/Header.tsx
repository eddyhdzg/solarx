import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "assets/images/logo-combination.png";

export default function Header() {
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
