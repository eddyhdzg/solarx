import { Grid, Paper, Typography, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { DropzoneField, GridItem, ImagesPreview } from "atomic";
import { EditProjectMediaSchema, useProject } from "hooks";
import { SubmitForm, ProjectIDParams } from "solarx-types";
import { useTranslation } from "react-i18next";
import { preventEnter } from "utils";
import { useParams } from "react-router-dom";
import {
  Section,
  Titles,
  Actions,
  ImageTypography,
  Img,
} from "../../ProjectForms.styled";

interface EditProjectMediaFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function EditProjectMediaFormLayout({
  onSubmit,
}: EditProjectMediaFormLayoutProps) {
  const { id = "" } = useParams<ProjectIDParams>();
  const { t } = useTranslation();
  const { data } = useProject(id);
  const {
    formState: { isValid, isDirty },
  } = useFormContext<EditProjectMediaSchema>();
  const coverImg = data?.images?.length ? data?.images[0] : undefined;

  return (
    <form
      noValidate
      autoComplete="off"
      onKeyDown={preventEnter}
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
          <Img src={coverImg} alt="project" />
          <ImageTypography variant="caption">
            {t("forms.projectForm.images")}
          </ImageTypography>
          <Grid container spacing={3}>
            <GridItem sm={9} lg={6}>
              <DropzoneField
                name="images"
                accept={["image/jpg", "image/jpeg", "image/gif", "image/png"]}
                multiple
              />
            </GridItem>
            <GridItem lg={6}>
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
