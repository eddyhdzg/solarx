import { functions, admin } from "../config/firebase";
import { Project } from "../types";

export const addProjectData_v0 = functions.firestore
  .document("/projects/{pid}")
  .onCreate(async (_, context) => {
    const data: Project = {
      businessType: "",
      city: "",
      company: "",
      created: admin.firestore.FieldValue.serverTimestamp(),
      fundedDate: null,
      goal: 1,
      investors: 0,
      raised: 0,
      operationDate: null,
      ppa: 0,
      releaseDate: null,
      roi: 1,
      sharePrice: 1,
      sharesSold: 0,
      state: "",
      status: "coming soon",
      totalShares: 1,
    };

    return admin
      .firestore()
      .collection("projects")
      .doc(context.params.pid)
      .update(data);
  });
