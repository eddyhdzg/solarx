import * as firebase from "@firebase/testing";

export const correctCreateProjectDiscount = {
  description: "",
  discount: 1,
  lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
  name: "",
  quantity: 1,
  sharesSold: 1,
};

export const updateCreateProjectDiscount = {
  description: "",
  name: "",
};
