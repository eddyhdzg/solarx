import FirebaseProvider from "./firebaseProvider/FirebaseProvider";
import { BrowserRouter } from "react-router-dom";
import RouterMemo from "router/RouterMemo";
import ThemeProvider from "./themeProvider/ThemeProvider";
import DayjsProvider from "./dayjsProvider/DayjsProvider";
import SnackbarProvider from "./snackbarProvider/SnackbarProvider";

const ProvidersWrapper: React.FC = ({ children }) => {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <RouterMemo>
          <ThemeProvider>
            <DayjsProvider>
              <SnackbarProvider>{children}</SnackbarProvider>
            </DayjsProvider>
          </ThemeProvider>
        </RouterMemo>
      </BrowserRouter>
    </FirebaseProvider>
  );
};

export default ProvidersWrapper;
