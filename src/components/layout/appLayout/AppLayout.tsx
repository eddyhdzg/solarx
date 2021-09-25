import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { Box, styled } from "@mui/material";

const Toolbar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  px: 1,
  ...theme.mixins.toolbar,
}));

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  [theme.breakpoints.up("md")]: {
    minHeight: "unset",
  },
}));

const Layout: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        ml: {
          sm: 7,
        },
      }}
    >
      <Box
        sx={{
          minHeight: "env(safe-area-inset-top)",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: (theme) => theme.zIndex.drawer - 1,
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      />
      <Header />
      <Navigation />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: {
            xxs: 2,
            md: 3,
          },
        }}
      >
        <Toolbar />
        {children}
        <Offset />
      </Box>
    </Box>
  );
};

export default Layout;
