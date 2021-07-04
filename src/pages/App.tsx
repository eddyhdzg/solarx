import { useEffect } from "react";
import { useFirestore } from "reactfire";
import Router from "routes/Router";

export default function App() {
  const firestore = useFirestore();

  useEffect(() => {
    firestore.enablePersistence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Router />;
}
