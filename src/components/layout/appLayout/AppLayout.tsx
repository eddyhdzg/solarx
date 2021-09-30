import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { StyledLayout, Notch, Main, Toolbar, Offset } from "./AppLayout.styled";

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Notch />
      <Header />
      <Navigation />
      <Main>
        <Toolbar />
        {children}
        <Offset />
      </Main>
    </StyledLayout>
  );
};

export default Layout;
