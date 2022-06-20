import { Grid, Paper, Typography, Button } from "@mui/material";
import { DateTimePicker, GridItem } from "atomic";
import { useTranslation } from "react-i18next";
import { IEditProjectDatesSchema } from "hooks";
import { SubmitForm } from "solarx-types";
import { checkKeyDown } from "utils";
import { Controller, useFormContext } from "react-hook-form";
import { Section, Titles, Actions } from "../ProjectForms.styled";

interface IProjectDatesFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function ProjectDatesFormLayout({
  onSubmit,
}: IProjectDatesFormLayoutProps) {
  const { t } = useTranslation();
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<IEditProjectDatesSchema>();

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
              {t("forms.projectForm.dates")}
            </Typography>
            <Typography variant="subtitle3" color="textSecondary">
              {t("forms.projectForm.datesDescription")}
            </Typography>
          </Titles>
          <Grid container spacing={3}>
            <GridItem xs={6}>
              <Controller
                name="releaseDate"
                control={control}
                render={({ field: { ref, ...field }, fieldState }) => (
                  <DateTimePicker
                    label={t("pages.admin.project.releaseDate")}
                    error={Boolean(fieldState.error)}
                    success={fieldState.isDirty}
                    {...field}
                  />
                )}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="fundedDate"
                control={control}
                render={({ field: { ref, ...field }, fieldState }) => (
                  <DateTimePicker
                    label={t("pages.admin.project.funded")}
                    error={Boolean(fieldState.error)}
                    success={fieldState.isDirty}
                    {...field}
                  />
                )}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="operationDate"
                control={control}
                render={({ field: { ref, ...field }, fieldState }) => (
                  <DateTimePicker
                    label={t("pages.admin.project.operationDate")}
                    error={Boolean(fieldState.error)}
                    success={fieldState.isDirty}
                    {...field}
                  />
                )}
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
