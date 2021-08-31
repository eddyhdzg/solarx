import { useEffect } from "react";
import { Seo, PageTitle } from "components";
import { useHeader } from "hooks";
import {
  useCreateProjectDataForm,
  useCreateProjectDataMutation,
  useCreateProjectMediaMutation,
} from "hooks";
import ProjectForm from "forms/projectForm/ProjectForm";
import { useSnackbar } from "notistack";
import { FormProvider } from "react-hook-form";

export default function CreateProjectPage() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: "projects", url: "/admin/projects" });
  }, [onChangeRoute]);
  return (
    <>
      <Seo
        title="Create project"
        description="Create a crowdfunding project."
      />
      <PageTitle>Create project</PageTitle>
      <CreateProject />
    </>
  );
}

function CreateProject() {
  const methods = useCreateProjectDataForm();
  const { createProjectDataMutation } = useCreateProjectDataMutation();
  const { createProjectMediaMutation } = useCreateProjectMediaMutation();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = methods.handleSubmit((data, createDataEvent) => {
    createDataEvent?.preventDefault();

    const { coverImage, images, ...createProjectData } = data;

    createProjectDataMutation(createProjectData)
      .then((res) => {
        enqueueSnackbar("Project Added! 🔥", { variant: "success" });

        if (coverImage?.length || images?.length) {
          createProjectMediaMutation(res.id, { coverImage, images })
            .then(() => {
              enqueueSnackbar("Media Added! 🔥", { variant: "success" });
            })
            .catch(() => {
              enqueueSnackbar("Media Added Error 😔", { variant: "error" });
            })
            .finally(() => {
              methods.reset(
                {},
                {
                  keepDefaultValues: true,
                  keepTouched: false,
                }
              );
            });
        } else {
          methods.reset(
            {},
            {
              keepDefaultValues: true,
              keepTouched: false,
            }
          );
        }
      })
      .catch(() => {
        enqueueSnackbar("Project Added Error 😔", { variant: "error" });
      });
  });

  return (
    <FormProvider {...methods}>
      <ProjectForm onSubmit={onSubmit} title="Create" />
    </FormProvider>
  );
}
