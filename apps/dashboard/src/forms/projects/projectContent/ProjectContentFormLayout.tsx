import { Grid, Paper, Typography, Button } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { GridItem, StyledTextField } from "atomic";
import { IEditProjectContentSchema } from "hooks";
import { SubmitForm } from "solarx-types";
import { useTranslation } from "react-i18next";
import { checkKeyDown } from "utils";
import {
  Section,
  Titles,
  Actions,
  StyledInputAdornment,
} from "../ProjectForms.styled";

interface IProjectContentFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function ProjectContentFormLayout({
  onSubmit,
}: IProjectContentFormLayoutProps) {
  const { t } = useTranslation();
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<IEditProjectContentSchema>();

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
              {t("forms.projectForm.content")}
            </Typography>
            <Typography variant="subtitle3" color="textSecondary">
              {t("forms.projectForm.contentDescription")}
            </Typography>
          </Titles>
          <Grid container spacing={3}>
            <GridItem lg={6}>
              <Controller
                name="general"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <StyledTextField
                      id="project-general"
                      label={t("forms.projectForm.generalContent")}
                      variant="outlined"
                      fullWidth
                      required
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      inputProps={{
                        autoComplete: "disabled",
                      }}
                      success={fieldState.isDirty}
                      InputProps={{
                        startAdornment: (
                          <StyledInputAdornment position="start">
                            https://www.notion.so/solarxapp/
                          </StyledInputAdornment>
                        ),
                      }}
                      {...field}
                    />
                  );
                }}
              />
            </GridItem>
            <GridItem lg={6}>
              <Controller
                name="graphs"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <StyledTextField
                      id="project-graphs"
                      label={t("forms.projectForm.graphsContent")}
                      variant="outlined"
                      fullWidth
                      required
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      inputProps={{
                        autoComplete: "disabled",
                      }}
                      success={fieldState.isDirty}
                      InputProps={{
                        startAdornment: (
                          <StyledInputAdornment position="start">
                            https://www.notion.so/solarxapp/
                          </StyledInputAdornment>
                        ),
                      }}
                      {...field}
                    />
                  );
                }}
              />
            </GridItem>
            <GridItem lg={6}>
              <Controller
                name="about"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <StyledTextField
                      id="project-about"
                      label={t("forms.projectForm.aboutContent")}
                      variant="outlined"
                      fullWidth
                      required
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      inputProps={{
                        autoComplete: "disabled",
                      }}
                      success={fieldState.isDirty}
                      InputProps={{
                        startAdornment: (
                          <StyledInputAdornment position="start">
                            https://www.notion.so/solarxapp/
                          </StyledInputAdornment>
                        ),
                      }}
                      {...field}
                    />
                  );
                }}
              />
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
