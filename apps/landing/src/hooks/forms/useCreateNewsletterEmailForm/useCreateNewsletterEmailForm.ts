import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createNewsletterEmailFormSchema,
  createNewsletterEmailFormDefaultValues,
} from "./useCreateNewsletterEmailForm.schema";

export default function useCreateNewsletterEmailForm() {
  const form = useForm({
    resolver: yupResolver(createNewsletterEmailFormSchema),
    mode: "onChange",
    defaultValues: createNewsletterEmailFormDefaultValues,
  });

  return form;
}
