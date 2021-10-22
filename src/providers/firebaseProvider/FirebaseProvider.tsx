import {
  FirebaseAppProvider,
  AuthProvider,
  FirestoreProvider,
  useFirebaseApp,
  // useInitPerformance,
} from "reactfire";
import { getAuth } from "firebase/auth";
import {
  //  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";
import firebaseConfig from "fb/firebaseConfig";
// import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const FirebaseAuthProvider: React.FC = ({ children }) => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  // const functions = getFunctions();

  // if (process.env.REACT_APP_ENV === "local") {
  //   connectFirestoreEmulator(firestore, "localhost", 8080);
  //   connectFunctionsEmulator(functions, "localhost", 5001);
  // }

  // useInitPerformance(async (firebaseApp) => {
  //   const { getPerformance } = await import("firebase/performance");
  //   return getPerformance(firebaseApp);
  // });

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
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
