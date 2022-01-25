import {
  FirebaseAppProvider,
  AuthProvider,
  FirestoreProvider,
  useFirebaseApp,
  useInitPerformance,
  FunctionsProvider,
  AnalyticsProvider,
} from "reactfire";
import { getAuth } from "firebase/auth";
import {
  // connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";
import firebaseConfig from "fb/firebaseConfig";
import {
  // connectFunctionsEmulator,
  getFunctions,
} from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

const FirebaseProvider: React.FC = ({ children }) => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const functions = getFunctions();
  const analytics = getAnalytics(firebaseApp);

  // if (process.env.REACT_APP_ENV === "local") {
  //   connectFirestoreEmulator(firestore, "localhost", 8080);
  //   connectFunctionsEmulator(functions, "localhost", 5001);
  // }

  useInitPerformance(async (firebaseApp) => {
    const { getPerformance } = await import("firebase/performance");
    return getPerformance(firebaseApp);
  });

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <FunctionsProvider sdk={functions}>
          <AnalyticsProvider sdk={analytics}>{children}</AnalyticsProvider>
        </FunctionsProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
};

const FirebaseProviderWrapper: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseProvider>{children}</FirebaseProvider>
    </FirebaseAppProvider>
  );
};

export default FirebaseProviderWrapper;
