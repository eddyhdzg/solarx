import RouterMemo from "../routes/RouterMemo";
import ThemeProvider from "./ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const ProvidersWrapper: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <RouterMemo>
        <ThemeProvider>{children}</ThemeProvider>
      </RouterMemo>
    </BrowserRouter>
  );
};

export default ProvidersWrapper;
