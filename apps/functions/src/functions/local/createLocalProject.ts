import { functions, db } from "../../config";
import { Project } from "solarx-types";

export const createLocalProject_v0 = functions.https.onCall(async () => {
  const projectCollectionSize = await db
    .collection("projects")
    .get()
    .then((res) => {
      return res.size;
    })
    .catch(() => {
      return 0;
    });

  const newProject: Project = {
    active: true,
    description: "project autocreated by a local project.",
    images: [
      "https://files.stripe.com/links/MDB8YWNjdF8xSUFMeHRMZ0phdDVFOG41fGZsX3Rlc3RfMVZpZ0NlNVhtaWNDQk9mZzBURWg0R2Vt00v2BcSoaF",
    ],
    metadata: {},
    name: `Local project #${projectCollectionSize + 1}`,
    role: null,
    tax_code: null,
  };

  return db.collection("projects").add(newProject);
});
