import {
  useCreateNewsletterEmailForm,
  useHandleCreateNewsletterEmail,
} from "hooks";
import { FormProvider } from "react-hook-form";
import CreateNewsletterEmailFormLayout from "./CreateNewsletterEmailFormLayout";

export default function CreateNewsletterEmailForm() {
  const form = useCreateNewsletterEmailForm();
  const handleCreateNewsletterEmail = useHandleCreateNewsletterEmail();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();
    handleCreateNewsletterEmail(form.reset, values);
  });

  return (
    <FormProvider {...form}>
      <CreateNewsletterEmailFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
