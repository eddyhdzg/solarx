import { useState, useEffect } from "react";
import {
  useEditProjectNumberForm,
  useProjectNumberMutation,
  useProject,
  IProjectNumberSchema,
  projectNumberDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import ProjectNumberForm from "./ProjectNumberForm";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";

interface ProjectID {
  id?: string;
}

export default function EditProjectNumberFormContext() {
  const form = useEditProjectNumberForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id || "");
  const editProjectNumberMutation = useProjectNumberMutation();
  const { enqueueSnackbar } = useSnackbar();
  const [defaultValues, setDefaultValues] = useState(
    projectNumberDefaultValues
  );

  useEffect(() => {
    const newDefaultValues: IProjectNumberSchema = !data
      ? projectNumberDefaultValues
      : {
          roi: data?.roi,
          sharePrice: data?.sharePrice,
          totalShares: data?.totalShares,
          ppa: data?.ppa,
        };

    setDefaultValues(newDefaultValues);
    form.reset(newDefaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IProjectNumberSchema;

    editProjectNumberMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider {...form}>
      <ProjectNumberForm onSubmit={onSubmit} defaultValues={defaultValues} />
    </FormProvider>
  );
}
