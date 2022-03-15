import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { StyledLayout, Notch, Toolbar, Offset } from "./AppLayout.styled";

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Notch />
      <Header />
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
