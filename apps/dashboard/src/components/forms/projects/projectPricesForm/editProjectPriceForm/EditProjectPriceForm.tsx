import { useEditProjectPriceForm, useHandleEditProjectPriceForm } from "hooks";
import { FormProvider } from "react-hook-form";
import { ProjectPrice } from "solarx-types";
import EditProjectPriceFormLayout from "./editProjectPriceFormLayout/EditProjectPriceFormLayout";

interface EditProjectPriceFormProps extends ProjectPrice {
  projectId?: string;
  scrolled: boolean;
}

export default function EditProjectPriceForm(props: EditProjectPriceFormProps) {
  const form = useEditProjectPriceForm();
  const onSubmit = useHandleEditProjectPriceForm(
    form.formState,
    form.handleSubmit,
    props.projectId,
    props.id,
    props.quantity,
    form.reset
  );

  return (
    <FormProvider {...form}>
      <EditProjectPriceFormLayout onSubmit={onSubmit} {...props} />
    </FormProvider>
  );
}
