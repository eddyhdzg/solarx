import { Grid, InputAdornment, Paper, Typography, Button } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import {
  NumberFormatInput,
  GridItem,
  StyledTextField,
  CurrencyField,
} from "components";
import { IEditProjectNumberSchema } from "hooks";
import { useTranslation } from "react-i18next";
import { checkKeyDown } from "utils";
import { SubmitForm } from "types";
import { Section, Titles, Actions } from "../ProjectForms.styled";

interface IProjectNumberFormLayoutProps {
  onSubmit: SubmitForm;
  defaultValues: IEditProjectNumberSchema;
}

export default function ProjectNumberFormLayout({
  onSubmit,
  defaultValues,
}: IProjectNumberFormLayoutProps) {
  const { t } = useTranslation();
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<IEditProjectNumberSchema>();

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
                      success={Number(field.value) !== defaultValues.roi}
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
                name="sharePrice"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    id="project-sharePrice"
                    label={t("projects.sharePrice")}
                    variant="outlined"
                    fullWidth
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    success={Number(field.value) !== defaultValues.sharePrice}
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
                    success={Number(field.value) !== defaultValues.totalShares}
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
                    success={Number(field.value) !== defaultValues.ppa}
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
