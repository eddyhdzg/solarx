import * as firebase from "@firebase/testing";
import { updateGeneralPriceQuantity_v0 } from "../../functions";
import { projectId, testEnv } from "../../testConfig";
import { db } from "../../config";
import { mockProject, mockProjectPrice } from "../../mocks";

describe("updateGeneralPriceQuantity_v0", () => {
  const wrapped = testEnv.wrap(updateGeneralPriceQuantity_v0);
  it("not a moderator", async () => {
    const { id: pid } = await db.collection("projects").add(mockProject);
    const { id } = await db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .add(mockProjectPrice);
    await db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .add({ ...mockProjectPrice, panelsPrice: 900 });

    await wrapped(
      {
        id: pid,
        test: id,
      },
      {
        auth: {
          token: {
            role: "MODERATOR",
          },
        },
      }
    );

    const doc = await db
      .collection("projects")
      .doc(pid)
      .collection("prices")
      .doc(id)
      .get();

    expect(doc.data()).toEqual(
      expect.objectContaining({
        basePrice: mockProject.basePrice,
      })
    );
  });

  afterAll(async () => {
    return await firebase.clearFirestoreData({ projectId });
  });
});
