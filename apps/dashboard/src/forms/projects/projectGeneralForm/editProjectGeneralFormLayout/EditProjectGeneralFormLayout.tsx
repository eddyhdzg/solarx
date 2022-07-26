import {
  Grid,
  Paper,
  Typography,
  Button,
  Autocomplete,
  FormControl,
  InputLabel,
} from "@mui/material";
import { GridItem, StyledSelect, StyledTextField } from "components";
import { mexicanStates, mexicanCities, businessTypes } from "constant";
import { useTranslation } from "react-i18next";
import { EditProjectGeneralSchema } from "hooks";
import { SubmitForm } from "solarx-types";
import { preventEnter } from "utils";
import { Controller, useFormContext } from "react-hook-form";
import { Section, Titles, Actions } from "../../ProjectForms.styled";

interface ProjectGeneralFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function EditProjectGeneralFormLayout({
  onSubmit,
}: ProjectGeneralFormLayoutProps) {
  const { t } = useTranslation();
  const {
    control,
    setValue,
    watch,
    formState: { isValid, isDirty },
  } = useFormContext<EditProjectGeneralSchema>();
  const [formState] = watch(["state"]);

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
              {t("forms.projectForm.general")}
            </Typography>
            <Typography variant="subtitle3" color="textSecondary">
              {t("forms.projectForm.generalDescription")}
            </Typography>
          </Titles>
          <Grid container spacing={3}>
            <GridItem xs={6}>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <StyledTextField
                      id="project-name"
                      label={t("projects.projectName")}
                      variant="outlined"
                      fullWidth
                      required
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      inputProps={{
                        autoComplete: "disabled",
                      }}
                      success={fieldState.isDirty}
                      {...field}
                    />
                  );
                }}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="state"
                control={control}
                render={({
                  field: { onChange, value, ...field },
                  fieldState,
                }) => (
                  <Autocomplete
                    id="project-state-autocomplete"
                    autoHighlight
                    options={mexicanStates}
                    getOptionLabel={(option) => option?.name || ""}
                    isOptionEqualToValue={(option, selected) =>
                      option?.key === selected?.key
                    }
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        label={t("projects.state")}
                        variant="outlined"
                        fullWidth
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "disabled",
                        }}
                        required
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                        success={fieldState.isDirty}
                      />
                    )}
                    value={value || null}
                    onChange={(_, item) => {
                      onChange(item);
                      setValue("city", "", {
                        shouldValidate: true,
                      });
                    }}
                    {...field}
                  />
                )}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="city"
                control={control}
                render={({ field: { onChange, ...field }, fieldState }) => (
                  <Autocomplete
                    id="project-city-autocomplete"
                    autoHighlight
                    freeSolo
                    disabled={!formState?.key}
                    forcePopupIcon
                    options={
                      formState?.key! in mexicanCities
                        ? mexicanCities[formState!.key]
                        : []
                    }
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        label={t("projects.city")}
                        variant="outlined"
                        fullWidth
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "disabled",
                        }}
                        onBlur={(e) => {
                          if (field.value !== e.target.value) {
                            onChange(e.target.value);
                          }
                        }}
                        required
                        error={Boolean(
                          fieldState.error && fieldState.isTouched
                        )}
                        helperText={
                          fieldState.isTouched && fieldState.error?.message
                        }
                        success={fieldState.isDirty}
                      />
                    )}
                    onChange={(_, item) => {
                      onChange(item);
                    }}
                    {...field}
                  />
                )}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="company"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    id="project-company"
                    label={t("projects.company")}
                    variant="outlined"
                    fullWidth
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    inputProps={{
                      autoComplete: "disabled",
                    }}
                    success={fieldState.isDirty}
                    {...field}
                  />
                )}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="businessType"
                control={control}
                render={({ field: { onChange, ...field }, fieldState }) => (
                  <Autocomplete
                    id="project-business-type"
                    autoHighlight
                    freeSolo
                    forcePopupIcon
                    options={businessTypes}
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        label={t("projects.businessType")}
                        variant="outlined"
                        fullWidth
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "disabled",
                        }}
                        onBlur={(e) => {
                          if (field.value !== e.target.value) {
                            onChange(e.target.value);
                          }
                        }}
                        required
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                        success={fieldState.isDirty}
                      />
                    )}
                    onChange={(_, item) => {
                      onChange(item);
                    }}
                    {...field}
                  />
                )}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controller
                name="status"
                control={control}
                render={({ field: { value, ...field }, fieldState }) => {
                  return (
                    <FormControl fullWidth>
                      <InputLabel htmlFor="project-status">
                        {t("forms.projectForm.status")}
                      </InputLabel>
                      <StyledSelect
                        id="project-status"
                        label={t("forms.projectForm.status")}
                        variant="outlined"
                        native
                        error={Boolean(fieldState.error)}
                        success={fieldState.isDirty}
                        value={value || ""}
                        {...field}
                      >
                        <option aria-label="None" value="" disabled />
                        <option value="coming soon">
                          {t("projects.status.comingSoon")}
                        </option>
                        <option value="funding">
                          {t("projects.status.funding")}
                        </option>
                        <option value="funded">
                          {t("projects.status.funded")}
                        </option>
                        <option value="operating">
                          {t("projects.status.operating")}
                        </option>
                        <option value="canceled">
                          {t("projects.status.canceled")}
                        </option>
                      </StyledSelect>
                    </FormControl>
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
