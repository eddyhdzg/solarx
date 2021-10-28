import { useState, useEffect } from "react";
import {
  useEditProjectNumberForm,
  useEditProjectNumberMutation,
  useProject,
  IEditProjectNumberSchema,
  editProjectNumberDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import ProjectNumberFormLayout from "../ProjectNumberFormLayout";

interface ProjectID {
  id?: string;
}

export default function EditProjectNumberForm() {
  const { reset, ...form } = useEditProjectNumberForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id || "");
  const editProjectNumberMutation = useEditProjectNumberMutation();
  const { enqueueSnackbar } = useSnackbar();
  // FIXME Remove useState
  const [defaultValues, setDefaultValues] = useState(
    editProjectNumberDefaultValues
  );

  useEffect(() => {
    const newDefaultValues: IEditProjectNumberSchema = !data
      ? editProjectNumberDefaultValues
      : {
          roi: data?.roi,
          sharePrice: data?.sharePrice,
          totalShares: data?.totalShares,
          ppa: data?.ppa,
        };

    setDefaultValues(newDefaultValues);
    reset(newDefaultValues);
  }, [status, data, reset]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IEditProjectNumberSchema;

    editProjectNumberMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider reset={reset} {...form}>
      <ProjectNumberFormLayout
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      />
    </FormProvider>
  );
}
