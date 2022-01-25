import { doc, getDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";

export default function useNewsletterEmail() {
  const firestore = useFirestore();

  const readNewsletterEmail = (email: string = "") => {
    const ref = doc(firestore, "newsletter", email);
    return getDoc(ref);
  };

  return readNewsletterEmail;
}
