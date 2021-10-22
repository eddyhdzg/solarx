import * as yup from "yup";
import { Notion_Regex } from "constant";

export interface IProjectContentSchema {
  generalContent?: string;
  graphsContent?: string;
  aboutContent?: string;
}

export const projectContentDefaultValues: IProjectContentSchema = {
  generalContent: "",
  graphsContent: "",
  aboutContent: "",
};

export const projectContentSchema: yup.SchemaOf<IProjectContentSchema> =
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
