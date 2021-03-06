import * as yup from "yup";
import { ProjectContent } from "solarx-types";
import { Notion_Regex } from "constant";

export interface IEditProjectContentSchema
  extends Pick<ProjectContent, "about" | "general" | "graphs"> {}

export const editProjectContentDefaultValues: IEditProjectContentSchema = {
  about: "",
  general: "",
  graphs: "",
};

export const editProjectContentSchema: yup.SchemaOf<IEditProjectContentSchema> =
  yup.object({
    about: yup
      .string()
      .matches(Notion_Regex, "Enter correct notion url!")
      .optional(),
    general: yup
      .string()
      .matches(Notion_Regex, "Enter correct notion url!")
      .optional(),
    graphs: yup
      .string()
      .matches(Notion_Regex, "Enter correct notion url!")
      .optional(),
  });
