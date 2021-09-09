import {
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Divider,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller, useFormContext } from "react-hook-form";
import {
  NumberFormatInput,
  GridItem,
  Switch,
  Button,
  DropzoneField,
  ImagesPreview,
} from "components";
import { mexicanStates, mexicanCities, businessTypes } from "constant";
import useStyles from "./projectFormBody.jss";
import { IProjectFormSchema } from "hooks";
import { ProjectForms } from "types";
import { useTranslation } from "react-i18next";

interface IProjectFormBodyProps {
  title: ProjectForms;
}

export default function ProjectFormBody({ title }: IProjectFormBodyProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    control,
    setValue,
    watch,
    formState: { isValid, isDirty, dirtyFields, errors },
  } = useFormContext<IProjectFormSchema>();
  const [formState] = watch(["state"]);

  return (
    <div className={classes.projectFormBody_form}>
      <Paper elevation={3}>
        <div className={classes.projectFormBody_body}>
          <div className={classes.projectFormBody_header}>
            <Typography variant="h6" component="h6">
              {t("forms.projectForm.general")}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {t("forms.projectForm.generalDescription")}
            </Typography>
          </div>
          <Grid container spacing={3}>
            <GridItem xs={6}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <TextField
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
                    classes={{
                      root: fieldState.isDirty
                        ? classes.projectFormBody_textField__success
                        : undefined,
                    }}
                    {...field}
                  />
                )}
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
                    getOptionSelected={(option, selected) =>
                      option?.key === selected?.key
                    }
                    renderInput={(params) => (
                      <TextField
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
                        classes={{
                          root: fieldState.isDirty
                            ? classes.projectFormBody_select__success
                            : undefined,
                        }}
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
                    disabled={!formState?.key}
                    freeSolo
                    forcePopupIcon
                    options={
                      formState?.key! in mexicanCities
                        ? mexicanCities[formState!.key]
                        : []
                    }
                    renderInput={(params) => (
                      <TextField
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
                        classes={{
                          root: fieldState.isDirty
                            ? classes.projectFormBody_select__success
                            : undefined,
                        }}
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
                  <TextField
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
                    classes={{
                      root: fieldState.isDirty
                        ? classes.projectFormBody_textField__success
                        : undefined,
                    }}
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
                    options={businessTypes}
                    autoHighlight
                    freeSolo
                    forcePopupIcon
                    renderInput={(params) => (
                      <TextField
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
                        classes={{
                          root: fieldState.isDirty
                            ? classes.projectFormBody_select__success
                            : undefined,
                        }}
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
          <Divider className={classes.projectFormBody_divider} />
          <div className={classes.projectFormBody_header}>
            <Typography variant="h6" component="h6">
              {t("forms.projectForm.numbers")}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {t("forms.projectForm.numbersDescription")}
            </Typography>
          </div>
          <Grid container spacing={3}>
            <GridItem xs={6}>
              <Controller
                name="roi"
                control={control}
                defaultValue={1}
                render={({ field: { onChange, ...field }, fieldState }) => (
                  <TextField
                    id="project-roi"
                    label={t("projects.roiShort")}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      onChange(Number(e.target.value));
                    }}
                    InputProps={{
                      inputComponent: NumberFormatInput as any,
                      inputProps: {
                        min: 1,
                        max: 100,
                        fixedDecimalScale: true,
                        thousandSeparator: true,
                        decimalScale: 2,
                      },
                      endAdornment: (
                        <InputAdornment position="end">%</InputAdornment>
                      ),
                    }}
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    classes={{
                      root: fieldState.isDirty
                        ? classes.projectFormBody_select__success
                        : undefined,
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
                defaultValue={1}
                render={({ field: { onChange, ...field }, fieldState }) => (
                  <TextField
                    id="project-sharePrice"
                    label={t("projects.sharePrice")}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      onChange(Number(e.target.value));
                    }}
                    InputProps={{
                      inputComponent: NumberFormatInput as any,
                      inputProps: {
                        min: 1,
                        thousandSeparator: true,
                        decimalScale: 2,
                      },
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">MXN</InputAdornment>
                      ),
                    }}
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    classes={{
                      root: fieldState.isDirty
                        ? classes.projectFormBody_select__success
                        : undefined,
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
                render={({ field: { onChange, ...field }, fieldState }) => (
                  <TextField
                    id="project-totalShares"
                    label={t("projects.totalShares")}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      onChange(Number(e.target.value));
                    }}
                    InputProps={{
                      inputComponent: NumberFormatInput as any,
                      inputProps: {
                        min: 1,
                        thousandSeparator: true,
                      },
                    }}
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    classes={{
                      root: fieldState.isDirty
                        ? classes.projectFormBody_textField__success
                        : undefined,
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
                defaultValue={0}
                render={({ field: { onChange, ...field }, fieldState }) => (
                  <TextField
                    id="project-ppa"
                    label={t("projects.ppaYears")}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      onChange(Number(e.target.value));
                    }}
                    InputProps={{
                      inputComponent: NumberFormatInput as any,
                      inputProps: {
                        min: 0,
                        decimalScale: 2,
                        thousandSeparator: true,
                      },
                    }}
                    required
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    classes={{
                      root: fieldState.isDirty
                        ? classes.projectFormBody_textField__success
                        : undefined,
                    }}
                    {...field}
                  />
                )}
              />
            </GridItem>
          </Grid>

          <Divider className={classes.projectFormBody_divider} />

          <div className={classes.projectFormBody_header}>
            <Typography variant="h6" component="h6">
              {t("forms.projectForm.media")}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {t("forms.projectForm.mediaDescription")}
            </Typography>
          </div>
          <Grid container spacing={3}>
            <GridItem
              xxs={12}
              xs={12}
              className={classes.projectFormBody_noBottomPadding}
            >
              <Typography
                variant="caption"
                gutterBottom
                classes={{
                  root: dirtyFields.coverImage
                    ? errors.coverImage
                      ? classes.projectFormBody_text__success
                      : classes.projectFormBody_text__success
                    : undefined,
                }}
              >
                {t("forms.projectForm.coverImage")}
              </Typography>
            </GridItem>
            <GridItem xs={6}>
              <DropzoneField
                name="coverImage"
                accept={["image/jpg", "image/jpeg", "image/gif", "image/png"]}
              />
            </GridItem>
            <GridItem xs={6}>
              <ImagesPreview name="coverImage" />
            </GridItem>
            <GridItem
              xxs={12}
              xs={12}
              className={classes.projectFormBody_noBottomPadding}
            >
              <Typography
                variant="caption"
                gutterBottom
                classes={{
                  root: dirtyFields.images
                    ? errors.images
                      ? classes.projectFormBody_text__success
                      : classes.projectFormBody_text__success
                    : undefined,
                }}
              >
                {t("forms.projectForm.images")}
              </Typography>
            </GridItem>
            <GridItem xs={6}>
              <DropzoneField
                name="images"
                accept={["image/jpg", "image/jpeg", "image/gif", "image/png"]}
                multiple
              />
            </GridItem>
            <GridItem xs={6}>
              <ImagesPreview name="images" />
            </GridItem>
          </Grid>
        </div>
        <div className={classes.projectFormBody_actions}>
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
        </div>
      </Paper>
    </div>
  );
}
