import { useTheme, useMediaQuery } from "@material-ui/core";
import DesktopLayout from "./desktopLayout/DesktopLayout";
import MobileLayout from "./mobileLayout/MobileLayout";

const Layout: React.FC = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const Component = isMobile ? MobileLayout : DesktopLayout;
  return <Component>{children}</Component>;
};

export default Layout;
