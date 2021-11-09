import FirebaseProvider from "./firebaseProvider/FirebaseProvider";
import ThemeProvider from "./ThemeProvider";
import RouterMemo from "router/RouterMemo";
import SnackbarProvider from "./SnackbarProvider";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

const ProvidersWrapper: React.FC = ({ children }) => {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={Route}>
          <RouterMemo>
            <ThemeProvider>
              <SnackbarProvider>{children}</SnackbarProvider>
            </ThemeProvider>
          </RouterMemo>
        </QueryParamProvider>
      </BrowserRouter>
    </FirebaseProvider>
  );
};

export default ProvidersWrapper;
