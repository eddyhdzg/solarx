import { functions, db } from "../../config";
import { Investors, Project, ProjectPrice } from "solarx-types";

export const addPriceData_v0 = functions.firestore
  .document("/projects/{pid}/prices/{id}")
  .onCreate(async (_, context) => {
    const { pid, id } = context.params;

    const { basePrice = 1 } = (await db
      .collection("projects")
      .doc(pid)
      .get()
      .then((res) => res.data())
      .catch(() => ({}))) as Project;

    const projectPrice: ProjectPrice = {
      investors: 0,
      quantity: 1,
      panelsSold: 0,
      basePrice,
    };

    const priceInvestors: Investors = {
      ids: [],
    };

    const p1 = db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .doc(id)
      .update(projectPrice);

    const p2 = db
      .collection("projects")
      .doc(pid)
      .collection("investors")
      .doc(id)
      .set(priceInvestors, { merge: true });

    return Promise.all([p1, p2]);
  });
