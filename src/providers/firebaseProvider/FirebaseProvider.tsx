import {
  FirebaseAppProvider,
  AuthProvider,
  FirestoreProvider,
  StorageProvider,
  useFirebaseApp,
  useInitPerformance,
} from "reactfire";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebaseConfig from "fb/firebaseConfig";

const FirebaseAuthProvider: React.FC = ({ children }) => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  useInitPerformance(async (firebaseApp) => {
    const { getPerformance } = await import("firebase/performance");
    return getPerformance(firebaseApp);
  });

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <StorageProvider sdk={storage}>{children}</StorageProvider>
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
