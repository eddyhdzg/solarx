import { IEditProjectPriceSchema } from "hooks";
import { ProjectPrice } from "types";

export const correctCreateProjectBuyingOption: ProjectPrice = {
  description: "",
  investors: [],
  quantity: 1,
  sharesSold: 1,
};

export const updateCreateProjectBuyingOption: IEditProjectPriceSchema = {
  quantity: 1,
};
