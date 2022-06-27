import { NavBar, Navigation } from "atomic";
import { StyledLayout, Notch, Toolbar, Offset } from "./AppLayout.styled";

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Notch />
      <NavBar />
      <Navigation />
      <main>
        <Toolbar />
        {children}
        <Offset />
      </main>
    </StyledLayout>
  );
};

export default Layout;
