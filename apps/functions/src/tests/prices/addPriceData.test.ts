// @ts-nocheck
import * as firebase from "@firebase/testing";
import { addPriceData_v0 } from "../../functions";
import { projectId, testEnv } from "../../testConfig";
import { db } from "../../config";
import { mockProject, mockProjectPrice } from "../../mocks";

describe("addPriceData_v0", () => {
  const id = "abc123";
  const wrapped = testEnv.wrap(addPriceData_v0);

  test("add a price to a project in /projects/{pid}/prices/{id}", async () => {
    const { id: pid } = await db.collection("projects").add(mockProject);

    const snap = testEnv.firestore.makeDocumentSnapshot(
      mockProjectPrice,
      `projects/${pid}/prices/${id}`
    );

    const projectRef = db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .doc(id);

    await projectRef.set(mockProjectPrice);

    await wrapped(snap, {
      params: {
        pid,
        id,
      },
    });

    const price = await db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .doc(id)
      .get();

    expect(price.exists).toBeTruthy();
    expect(price?.data()).toEqual(
      expect.objectContaining({
        active: true,
        billing_scheme: "per_unit",
        currency: "mxn",
        description: "",
        interval: null,
        interval_count: null,
        investors: [],
        metadata: {},
        product: "",
        quantity: 1,
        recurring: null,
        sharePrice: 1000,
        sharesSold: 0,
        tax_behavior: "unspecified",
        tiers: null,
        tiers_mode: null,
        transform_quantity: null,
        trial_period_days: null,
        type: "one_time",
        unit_amount: 1,
      })
    );
  });

  afterAll(() => {
    return firebase.clearFirestoreData({ projectId });
  });
});
