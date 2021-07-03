import {
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Controller,
  Control,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { NumberFormatInput, GridItem } from "components";
import { mexicanStates, mexicanCities, businessTypes } from "constant";
import { useCreateProjectFormSchema } from "hooks/forms/useCreateProjectForm";
import useStyles from "./createProjectForm.jss";

interface ICreateProjectFormProps {
  control: Control<useCreateProjectFormSchema>;
  setValue: UseFormSetValue<useCreateProjectFormSchema>;
  watch: UseFormWatch<useCreateProjectFormSchema>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

export default function CreateProjectForm({
  control,
  setValue,
  watch,
  onSubmit,
}: ICreateProjectFormProps) {
  const classes = useStyles();
  const [formState] = watch(["state"]);

  return (
    <div className={classes.createProjectForm_form}>
      <Paper className={classes.createProjectForm_paper} elevation={3}>
        <div className={classes.createProjectForm_header}>
          <Typography variant="h6" component="h6">
            General
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Provide basic information about the project.
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
                  label="Project Name"
                  variant="outlined"
                  fullWidth
                  required
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
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
                      label="State"
                      variant="outlined"
                      fullWidth
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "disabled",
                      }}
                      required
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                    />
                  )}
                  value={value || ""}
                  onChange={(_, item) => {
                    onChange(item);
                    setValue("city", "");
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
                    formState?.key in mexicanCities
                      ? mexicanCities[formState.key]
                      : []
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="City"
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
                  label="Company"
                  variant="outlined"
                  fullWidth
                  required
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
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
                      label="Business Type"
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
        </Grid>
      </Paper>
      <Paper className={classes.createProjectForm_paper} elevation={3}>
        <div className={classes.createProjectForm_header}>
          <Typography variant="h6" component="h6">
            Numbers
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            All numeric data of the project.
          </Typography>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Controller
              name="ror"
              control={control}
              defaultValue={1}
              render={({ field: { onChange, ...field }, fieldState }) => (
                <TextField
                  id="project-ror"
                  label="RoR"
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
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="sharePrice"
              control={control}
              defaultValue={1}
              render={({ field: { onChange, ...field }, fieldState }) => (
                <TextField
                  id="project-sharePrice"
                  label="Share Price"
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
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="totalShares"
              control={control}
              defaultValue={1}
              render={({ field: { onChange, ...field }, fieldState }) => (
                <TextField
                  id="project-totalShares"
                  label="Total Shares"
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
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="ppa"
              control={control}
              defaultValue={0}
              render={({ field: { onChange, ...field }, fieldState }) => (
                <TextField
                  id="project-ppa"
                  label="PPA years"
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
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.createProjectForm_paper} elevation={3}>
        <div className={classes.createProjectForm_header}>
          <Typography variant="h6" component="h6">
            Media
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Comming Soon
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
