import { Grid, InputAdornment, Paper, Typography, Button } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import {
  CurrencyField,
  GridItem,
  NumberFormatInput,
  StyledTextField,
} from "atomic";
import { EditProjectNumberSchema } from "hooks";
import { useTranslation } from "react-i18next";
import { preventEnter } from "utils";
import { SubmitForm } from "solarx-types";
import { Section, Titles, Actions } from "../../ProjectForms.styled";

interface ProjectNumberFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function ProjectNumberFormLayout({
  onSubmit,
}: ProjectNumberFormLayoutProps) {
  const { t } = useTranslation();
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<EditProjectNumberSchema>();

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
              {t("forms.projectForm.numbers")}
            </Typography>
            <Typography variant="subtitle3" color="textSecondary">
              {t("forms.projectForm.numbersDescription")}
            </Typography>
          </Titles>
          <Grid container spacing={3}>
            <GridItem xs={6}>
              <Controller
                name="roi"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <StyledTextField
                      id="project-roi"
                      label={t("projects.roiShort")}
                      variant="outlined"
                      fullWidth
                      required
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      success={fieldState.isDirty}
                      inputProps={{
                        inputMode: "decimal",
                        min: 0,
                        max: 100,
                        decimalScale: 2,
                      }}
                      InputProps={{
                        inputComponent: NumberFormatInput as any,
                        endAdornment: (
                          <InputAdornment position="end">%</InputAdornment>
                        ),
                      }}
                      {...field}
                    />
                  );
                }}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="basePrice"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    id="project-basePrice"
                    label={t("projects.basePrice")}
                    variant="outlined"
                    fullWidth
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    success={fieldState.isDirty}
                    inputProps={{
                      inputMode: "numeric",
                      min: 1,
                      thousandSeparator: true,
                    }}
                    InputProps={{
                      inputComponent: CurrencyField as any,
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">MXN</InputAdornment>
                      ),
                    }}
                    {...field}
                  />
                )}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="totalShares"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    id="project-totalShares"
                    label={t("projects.totalShares")}
                    variant="outlined"
                    fullWidth
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    success={fieldState.isDirty}
                    inputProps={{
                      inputMode: "numeric",
                      min: 1,
                      thousandSeparator: true,
                      decimalScale: 0,
                    }}
                    InputProps={{
                      inputComponent: NumberFormatInput as any,
                    }}
                    {...field}
                  />
                )}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="ppa"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    id="project-ppa"
                    label={t("projects.ppaYears")}
                    variant="outlined"
                    fullWidth
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    success={fieldState.isDirty}
                    inputProps={{
                      inputMode: "decimal",
                      min: 0,
                    }}
                    InputProps={{
                      inputComponent: NumberFormatInput as any,
                    }}
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
