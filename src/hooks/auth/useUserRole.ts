import { useState, useEffect } from "react";
import { useUser } from "reactfire";
import { UserRole } from "types";

export default function useUserRole() {
  const user = useUser();
  const [userRole, setUserRole] = useState<UserRole>(null);

  useEffect(() => {
    if (!user?.data) {
      setUserRole(null);
    }

    user?.data?.getIdTokenResult().then((token) => {
      setUserRole(token?.claims?.role);
    });
  }, [user?.data]);

  return userRole;
}

// export const useUserProfile = () => {
//     const firestore = useFirestore()
//     const { uid } = useUser().data ?? {}
//     const userRef = firestore
//       .collection('users')
//       .doc(useIsUserConnected() ? uid : ' ')

//     return useFirestoreDocData(userRef).data
//   }
