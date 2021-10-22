import * as firebase from "@firebase/testing";
import { BuyingOption, TTimestamp, EditBuyingOption } from "../types";

export const correctCreateProjectBuyingOption: BuyingOption = {
  description: "",
  discount: 1,
  investors: 0,
  lastUpdate: firebase.firestore.FieldValue.serverTimestamp() as TTimestamp,
  quantity: 1,
  sharesSold: 1,
  subtitle: "",
  title: "",
};

export const updateCreateProjectBuyingOption: EditBuyingOption = {
  description: "",
  subtitle: "",
  title: "",
};
