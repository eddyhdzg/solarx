import * as yup from "yup";
import { Notion_Regex } from "constant";

export interface IEditProjectContentSchema {
  generalContent?: string;
  graphsContent?: string;
  aboutContent?: string;
}

export const editProjectContentDefaultValues: IEditProjectContentSchema = {
  generalContent: "",
  graphsContent: "",
  aboutContent: "",
};

export const editProjectContentSchema: yup.SchemaOf<IEditProjectContentSchema> =
  yup.object({
    generalContent: yup
      .string()
      .matches(Notion_Regex, "Enter correct notion url!")
      .optional(),
    graphsContent: yup
      .string()
      .matches(Notion_Regex, "Enter correct notion url!")
      .optional(),
    aboutContent: yup
      .string()
      .matches(Notion_Regex, "Enter correct notion url!")
      .optional(),
  });
