import { Grid, Paper, Typography, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { GridItem, DropzoneField, ImagesPreview } from "components";
import { IProjectMediaSchema } from "hooks";
import { SubmitForm } from "types";
import { useTranslation } from "react-i18next";
import { checkKeyDown } from "utils";
import {
  Section,
  Titles,
  Actions,
  ImageTypography,
  MB3Grid,
} from "../ProjectForms.styled";

interface IProjectMediaFormProps {
  onSubmit: SubmitForm;
}

export default function ProjectMediaForm({ onSubmit }: IProjectMediaFormProps) {
  const { t } = useTranslation();
  const {
    formState: { isValid, isDirty },
  } = useFormContext<IProjectMediaSchema>();

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

          <MB3Grid container spacing={3}>
            <GridItem sm={6}>
              <DropzoneField
                name="coverImage"
                accept={["image/jpg", "image/jpeg", "image/gif", "image/png"]}
              />
            </GridItem>
            <GridItem sm={6}>
              <ImagesPreview name="coverImage" />
            </GridItem>
          </MB3Grid>

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
