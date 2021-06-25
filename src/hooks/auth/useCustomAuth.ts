import firebase from "firebase/app";
import { useAuth } from "reactfire";

export default function useCustomAuth() {
  const auth = useAuth();
  const signIn = async () => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };
  const signOut = async () => {
    await auth.signOut();
  };

  return { signIn, signOut };
}
