import * as yup from "yup";

export interface CreateNewsletterEmailFormFormSchema {
  email: string;
}

export const createNewsletterEmailFormDefaultValues: CreateNewsletterEmailFormFormSchema =
  {
    email: "",
  };

export const createNewsletterEmailFormSchema: yup.SchemaOf<CreateNewsletterEmailFormFormSchema> =
  yup.object({
    email: yup.string().email().required("Value is required"),
  });
