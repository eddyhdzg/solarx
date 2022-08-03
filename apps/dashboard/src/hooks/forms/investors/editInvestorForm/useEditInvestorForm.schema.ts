import * as yup from "yup";
import { Investor } from "solarx-types";

export type EditInvestorSchema = Pick<Investor, "displayName">;

export const editInvestorDefaultValues: EditInvestorSchema = {
  displayName: "",
};

export const editInvestorSchema: yup.SchemaOf<EditInvestorSchema> = yup.object({
  displayName: yup.string().required("Value is required"),
});
