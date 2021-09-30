import {
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Typography,
  Button,
  Autocomplete,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import {
  NumberFormatInput,
  GridItem,
  Switch,
  DropzoneField,
  ImagesPreview,
} from "components";
import { mexicanStates, mexicanCities, businessTypes } from "constant";
import { IProjectFormSchema } from "hooks";
import { ProjectForms } from "types";
import { useTranslation } from "react-i18next";
import {
  Section,
  Titles,
  StyledTextField,
  Actions,
  StyledDivider,
  ImageTypography,
  MB3Grid,
} from "./ProjectFormBody.styled";

interface IProjectFormBodyProps {
  title: ProjectForms;
}

export default function ProjectFormBody({ title }: IProjectFormBodyProps) {
  const { t } = useTranslation();
  const {
    control,
    setValue,
    watch,
    formState: { isValid, isDirty },
  } = useFormContext<IProjectFormSchema>();
  const [formState] = watch(["state"]);

  return (
    <div>
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
                defaultValue=""
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
                        shouldDirty: true,
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                name="archived"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Switch name="project-archived" checked={field.value} />
                    }
                    label={t("projects.archived")}
                    labelPlacement="start"
                    {...field}
                  />
                )}
              />
            </GridItem>
          </Grid>
          <StyledDivider />
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
                render={({ field, fieldState }) => (
                  <StyledTextField
                    id="project-roi"
                    label={t("projects.roiShort")}
                    variant="outlined"
                    fullWidth
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    success={fieldState.isDirty && fieldState.isTouched}
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
                )}
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
                    success={fieldState.isDirty && fieldState.isTouched}
                    inputProps={{
                      inputMode: "numeric",
                      min: 1,
                      thousandSeparator: true,
                      decimalScale: 0,
                    }}
                    InputProps={{
                      inputComponent: NumberFormatInput as any,
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
                defaultValue={1}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    id="project-totalShares"
                    label={t("projects.totalShares")}
                    variant="outlined"
                    fullWidth
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    success={fieldState.isDirty && fieldState.isTouched}
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
                    success={fieldState.isDirty && fieldState.isTouched}
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

          <StyledDivider />

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
            {title === "Create"
              ? t("pages.admin.createProject.title")
              : t("pages.admin.editProject.editProject")}
          </Button>
        </Actions>
      </Paper>
    </div>
  );
}
