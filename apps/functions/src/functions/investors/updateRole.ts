import { functions, auth } from "../../config";
import { UserRole } from "solarx-types";

export const updateRole_v0 = functions.firestore
  .document("investors/{uid}")
  .onUpdate((change, context) => {
    const before = change.before?.data();
    const after = change.after?.data();

    if (before?.role === after?.role) {
      return null;
    }

    const customClaims: { role: UserRole } = {
      role: after.role,
    };

    return auth.setCustomUserClaims(context.params.uid, customClaims);
  });
