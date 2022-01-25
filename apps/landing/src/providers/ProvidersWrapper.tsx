import FirebaseProvider from "./firebaseProvider/FirebaseProvider";
import LanguageProvider from "./languageProvider/LanguageProvider";
import SnackbarProvider from "./snackbarProvider/SnackbarProvider";
import ThemeProvider from "./themeProvider/ThemeProvider";

const ProvidersWrapper: React.FC = ({ children }) => {
  return (
    <FirebaseProvider>
      <ThemeProvider>
        <SnackbarProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </FirebaseProvider>
  );
};

export default ProvidersWrapper;
