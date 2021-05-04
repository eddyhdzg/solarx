import ThemeProvider from "./ThemeProvider";

const ProvidersWrapper: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ProvidersWrapper;
