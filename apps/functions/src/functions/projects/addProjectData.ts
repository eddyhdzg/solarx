import { functions, db, serverTimestamp } from "../../config";
import { Project, Timestamp } from "solarx-types";

export const addProjectData_v0 = functions.firestore
  .document("/projects/{pid}")
  .onCreate(async (_, context) => {
    const data: Project = {
      basePrice: 1,
      businessType: "",
      city: "",
      company: "",
      created: serverTimestamp() as Timestamp,
      fundedDate: null,
      goal: 1,
      investors: 0,
      raised: 0,
      operationDate: null,
      ppa: 0,
      releaseDate: null,
      roi: 1,
      sharesSold: 0,
      state: "",
      status: "coming soon",
      totalShares: 1,
    };

    return db.collection("projects").doc(context.params.pid).update(data);
  });
