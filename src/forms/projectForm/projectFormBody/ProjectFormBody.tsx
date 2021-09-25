import {
  alpha,
  Box,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import Autocomplete from "@mui/lab/Autocomplete";
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

interface IProjectFormBodyProps {
  title: ProjectForms;
}

export default function ProjectFormBody({ title }: IProjectFormBodyProps) {
  const { t } = useTranslation();
  const {
    control,
    setValue,
    watch,
    formState: { isValid, isDirty, dirtyFields, errors },
  } = useFormContext<IProjectFormSchema>();
  const [formState] = watch(["state"]);

  return (
    <div>
      <Paper>
        <Box
          sx={{
            p: 2,
            mb: 2,
          }}
        >
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography variant="h6" component="h6">
              {t("forms.projectForm.general")}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {t("forms.projectForm.generalDescription")}
            </Typography>
          </Box>
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
                    // @ts-ignore
                    helperText={fieldState.error?.message}
                    inputProps={{
                      autoComplete: "disabled",
                    }}
                    sx={
                      fieldState.isDirty
                        ? {
                            "& input:valid + fieldset": {
                              borderColor: (theme) =>
                                theme.palette.success.dark,
                              borderWidth: 2,
                            },
                          }
                        : {}
                    }
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
                    isOptionEqualToValue={(option, selected) =>
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
                        // @ts-ignore
                        helperText={fieldState.error?.message}
                        sx={
                          fieldState.isDirty
                            ? {
                                "& input:valid + div + fieldset": {
                                  borderColor: (theme) =>
                                    theme.palette.success.dark,
                                  borderWidth: 2,
                                },
                              }
                            : {}
                        }
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
                          // @ts-ignore
                          fieldState.isTouched && fieldState.error?.message
                        }
                        sx={
                          fieldState.isDirty
                            ? {
                                "& input:valid + div + fieldset": {
                                  borderColor: (theme) =>
                                    theme.palette.success.dark,
                                  borderWidth: 2,
                                },
                              }
                            : {}
                        }
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
                    // @ts-ignore
                    helperText={fieldState.error?.message}
                    inputProps={{
                      autoComplete: "disabled",
                    }}
                    sx={
                      fieldState.isDirty
                        ? {
                            "& input:valid + fieldset": {
                              borderColor: (theme) =>
                                theme.palette.success.dark,
                              borderWidth: 2,
                            },
                          }
                        : {}
                    }
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
                        // @ts-ignore
                        helperText={fieldState.error?.message}
                        sx={
                          fieldState.isDirty
                            ? {
                                "& input:valid + div + fieldset": {
                                  borderColor: (theme) =>
                                    theme.palette.success.dark,
                                  borderWidth: 2,
                                },
                              }
                            : {}
                        }
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
          <Divider
            sx={{
              my: 4,
            }}
          />
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography variant="h6" component="h6">
              {t("forms.projectForm.numbers")}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {t("forms.projectForm.numbersDescription")}
            </Typography>
          </Box>
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
                    // @ts-ignore
                    helperText={fieldState.error?.message}
                    sx={
                      fieldState.isDirty
                        ? {
                            "& input:valid + div + fieldset": {
                              borderColor: (theme) =>
                                theme.palette.success.dark,
                              borderWidth: 2,
                            },
                          }
                        : {}
                    }
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
                    // @ts-ignore
                    helperText={fieldState.error?.message}
                    sx={
                      fieldState.isDirty
                        ? {
                            "& input:valid + div + fieldset": {
                              borderColor: (theme) =>
                                theme.palette.success.dark,
                              borderWidth: 2,
                            },
                          }
                        : {}
                    }
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
                    // @ts-ignore
                    helperText={fieldState.error?.message}
                    sx={
                      fieldState.isDirty
                        ? {
                            "& input:valid + fieldset": {
                              borderColor: (theme) =>
                                theme.palette.success.dark,
                              borderWidth: 2,
                            },
                          }
                        : {}
                    }
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
                    // @ts-ignore
                    helperText={fieldState.error?.message}
                    sx={
                      fieldState.isDirty
                        ? {
                            "& input:valid + fieldset": {
                              borderColor: (theme) =>
                                theme.palette.success.dark,
                              borderWidth: 2,
                            },
                          }
                        : {}
                    }
                    {...field}
                  />
                )}
              />
            </GridItem>
          </Grid>

          <Divider
            sx={{
              my: 4,
            }}
          />

          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography variant="h6" component="h6">
              {t("forms.projectForm.media")}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {t("forms.projectForm.mediaDescription")}
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <GridItem
              sx={{
                pb: 0,
              }}
            >
              <Typography
                variant="caption"
                gutterBottom
                color={(theme) =>
                  dirtyFields.coverImage
                    ? errors.coverImage
                      ? theme.palette.error.main
                      : theme.palette.success.main
                    : undefined
                }
              >
                {t("forms.projectForm.coverImage")}
              </Typography>
            </GridItem>
            <GridItem sm={6}>
              <DropzoneField
                name="coverImage"
                accept={["image/jpg", "image/jpeg", "image/gif", "image/png"]}
              />
            </GridItem>
            <GridItem sm={6}>
              <ImagesPreview name="coverImage" />
            </GridItem>
            <GridItem
              sx={{
                pb: 0,
              }}
            >
              <Typography
                variant="caption"
                gutterBottom
                color={(theme) =>
                  dirtyFields.images
                    ? errors.images
                      ? theme.palette.error.main
                      : theme.palette.success.main
                    : undefined
                }
              >
                {t("forms.projectForm.images")}
              </Typography>
            </GridItem>
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
        </Box>
        <Box
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.common.black, 0.08),
            p: 2,
            borderEndStartRadius: 1,
            borderEndEndRadius: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
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
        </Box>
      </Paper>
    </div>
  );
}
