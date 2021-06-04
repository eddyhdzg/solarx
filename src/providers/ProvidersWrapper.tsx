import RouterMemo from "../routes/RouterMemo";
import ThemeProvider from "./ThemeProvider";
import FirebaseProvider from "./firebaseProvider/FirebaseProvider";
import { BrowserRouter } from "react-router-dom";

const ProvidersWrapper: React.FC = ({ children }) => {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <RouterMemo>
          <ThemeProvider>{children}</ThemeProvider>
        </RouterMemo>
      </BrowserRouter>
    </FirebaseProvider>
  );
};

export default ProvidersWrapper;
