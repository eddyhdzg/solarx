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

const FirebaseAuthProvider: React.FC = ({ children }) => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const functions = getFunctions();
  const analytics = getAnalytics(firebaseApp);

  // if (process.env.REACT_APP_ENV === "local") {
  //   connectFirestoreEmulator(firestore, process.env.REACT_APP_HOST, 8080);
  //   connectFunctionsEmulator(functions, process.env.REACT_APP_HOST, 5001);
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

const FirebaseProvider: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
    </FirebaseAppProvider>
  );
};

export default FirebaseProvider;
