import { Grid, Paper, Typography, Button } from "@mui/material";
import { GridItem, DateTimePicker } from "components";
import { useTranslation } from "react-i18next";
import { IProjectDatesSchema } from "hooks";
import { SubmitForm } from "types";
import { Section, Titles, Actions } from "../ProjectForms.styled";
import { checkKeyDown } from "utils";
import { Controller, useFormContext } from "react-hook-form";

interface IProjectFormBodyProps {
  onSubmit: SubmitForm;
}

export default function ProjectDatesForm({ onSubmit }: IProjectFormBodyProps) {
  const { t } = useTranslation();
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<IProjectDatesSchema>();

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
                    label="Release Date"
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
                    label="Funded Date"
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
                    label="Operation Date"
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
