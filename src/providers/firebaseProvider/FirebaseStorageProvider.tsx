import { StorageProvider, useFirebaseApp } from "reactfire";
import { getStorage } from "firebase/storage";

const FirebaseStorageProvider: React.FC = ({ children }) => {
  const firebaseApp = useFirebaseApp();
  const storage = getStorage(firebaseApp);
  return <StorageProvider sdk={storage}>{children}</StorageProvider>;
};

export default FirebaseStorageProvider;
