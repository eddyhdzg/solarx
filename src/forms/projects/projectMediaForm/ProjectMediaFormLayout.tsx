import { Grid, Paper, Typography, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { GridItem, DropzoneField, ImagesPreview } from "components";
import { IEditProjectMediaSchema, useProject } from "hooks";
import { SubmitForm, ProjectIDParams } from "types";
import { useTranslation } from "react-i18next";
import { checkKeyDown } from "utils";
import {
  Section,
  Titles,
  Actions,
  ImageTypography,
  Img,
} from "../ProjectForms.styled";
import { useParams } from "react-router-dom";

interface IProjectMediaFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function ProjectMediaFormLayout({
  onSubmit,
}: IProjectMediaFormLayoutProps) {
  const { id } = useParams<ProjectIDParams>();
  const { data } = useProject(id || "");
  const { t } = useTranslation();
  const {
    formState: { isValid, isDirty },
  } = useFormContext<IEditProjectMediaSchema>();

  return (
    <form
      noValidate
      autoComplete="off"
      onKeyDown={(e) => checkKeyDown(e)}
      onSubmit={onSubmit}
    >
      <Paper>
        <Section>
          <Titles>
            <Typography variant="h6" component="h6">
              {t("forms.projectForm.media")}
            </Typography>
            <Typography variant="subtitle3" color="textSecondary">
              {t("forms.projectForm.mediaDescription")}
            </Typography>
          </Titles>
          <ImageTypography variant="caption">
            {t("forms.projectForm.coverImage")}
          </ImageTypography>
          <Img
            src={data?.images?.length ? data?.images[0] : undefined}
            alt="project"
          />
          <ImageTypography variant="caption">
            {t("forms.projectForm.images")}
          </ImageTypography>
          <Grid container spacing={3}>
            <GridItem sm={6}>
              <DropzoneField
                name="images"
                accept={["image/jpg", "image/jpeg", "image/gif", "image/png"]}
                multiple
              />
            </GridItem>
            <GridItem sm={6}>
              <ImagesPreview name="images" />
            </GridItem>
          </Grid>
        </Section>
        <Actions>
          <Button
            size="large"
            variant="contained"
            disabled={!isValid || !isDirty}
            type="submit"
          >
            {t("pages.admin.editProject.editProject")}
          </Button>
        </Actions>
      </Paper>
    </form>
  );
}
