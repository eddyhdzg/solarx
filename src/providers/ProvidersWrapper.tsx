import { RouterMemoProvider } from "./RouterMemoContext";
import ThemeProvider from "./ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const ProvidersWrapper: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <RouterMemoProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </RouterMemoProvider>
    </BrowserRouter>
  );
};

export default ProvidersWrapper;
