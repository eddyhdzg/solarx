import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "fb/firebaseConfig";
import "firebase/auth";
import "firebase/firestore";

const FirebaseProvider: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      {children}
    </FirebaseAppProvider>
  );
};

export default FirebaseProvider;
