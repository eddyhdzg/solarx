import firebase from "firebase/app";
import { useAuth } from "reactfire";

export default function useCustomAuth() {
  const auth = useAuth();

  const googleProvider =
    new firebase.auth.GoogleAuthProvider().setCustomParameters({
      prompt: "select_account",
    });

  const signIn = async () => {
    await auth.signInWithPopup(googleProvider);
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return { signIn, signOut };
}
