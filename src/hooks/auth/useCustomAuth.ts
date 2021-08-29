import { useAuth } from "reactfire";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function useCustomAuth() {
  const auth = useAuth();

  const signIn = async () => {
    const provider = new GoogleAuthProvider().setCustomParameters({
      prompt: "select_account",
    });
    await signInWithPopup(auth, provider);
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return { signIn, signOut };
}
