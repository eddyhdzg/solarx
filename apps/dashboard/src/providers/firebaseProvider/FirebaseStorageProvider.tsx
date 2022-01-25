import { StorageProvider, useFirebaseApp } from "reactfire";
import {
  getStorage,
  // connectStorageEmulator
} from "firebase/storage";

const FirebaseStorageProvider: React.FC = ({ children }) => {
  const firebaseApp = useFirebaseApp();
  const storage = getStorage(firebaseApp);

  // if (process.env.REACT_APP_ENV === "local") {
  //   connectStorageEmulator(storage, process.env.REACT_APP_HOST, 9199);
  // }

  return <StorageProvider sdk={storage}>{children}</StorageProvider>;
};

export default FirebaseStorageProvider;
