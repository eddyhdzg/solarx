import { useTheme, useMediaQuery } from "@material-ui/core";
import DesktopLayout from "./desktopLayout/DesktopLayout";
import MobileLayout from "./mobileLayout/MobileLayout";

const Layout: React.FC = ({ children }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (isDesktop) return <DesktopLayout>{children}</DesktopLayout>;
  return <MobileLayout>{children}</MobileLayout>;
};

export default Layout;
