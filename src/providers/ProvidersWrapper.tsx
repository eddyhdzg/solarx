import FirebaseProvider from "./firebaseProvider/FirebaseProvider";
import ThemeProvider from "./ThemeProvider";
import RouterMemo from "router/RouterMemo";
import SnackbarProvider from "./SnackbarProvider";
import { BrowserRouter } from "react-router-dom";

const ProvidersWrapper: React.FC = ({ children }) => {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <RouterMemo>
          <ThemeProvider>
            <SnackbarProvider>{children}</SnackbarProvider>
          </ThemeProvider>
        </RouterMemo>
      </BrowserRouter>
    </FirebaseProvider>
  );
};

export default ProvidersWrapper;
