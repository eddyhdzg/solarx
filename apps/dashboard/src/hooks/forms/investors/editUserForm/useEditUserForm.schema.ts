import * as yup from "yup";
import { Investor } from "solarx-types";

export type IEditUserSchema = Pick<Investor, "displayName">;

export const editUserDefaultValues: IEditUserSchema = {
  displayName: "",
};

export const editUserSchema: yup.SchemaOf<IEditUserSchema> = yup.object({
  displayName: yup.string().required("Value is required"),
});
