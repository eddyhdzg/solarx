import { useFirestore } from "reactfire";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function useCreateNewsletterEmailMutation() {
  const firestore = useFirestore();

  const createNewsletterEmail = (email: string = "") => {
    const ref = doc(firestore, "newsletter", email);
    return setDoc(ref, { email, created: serverTimestamp() });
  };

  return createNewsletterEmail;
}
