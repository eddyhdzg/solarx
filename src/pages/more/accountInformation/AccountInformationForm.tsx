import {
  Avatar,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Button, GridItem } from "components";
import { FirestoreUser } from "types";
import useStyles from "./accountInformation.jss";
import { IFirestoreUserFormSchema, useEditFirestoreUserMutation } from "hooks";
import { Controller, useFormContext } from "react-hook-form";

interface IAccountInformationFormProps {
  firestoreUser: FirestoreUser;
}

export default function AccountInformationForm({
  firestoreUser,
}: IAccountInformationFormProps) {
  const classes = useStyles();
  const { handleFirestoreUserMutaion } = useEditFirestoreUserMutation();
  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = useFormContext<IFirestoreUserFormSchema>();

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();
    handleFirestoreUserMutaion(firestoreUser?.uid || "", values);
  });

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <Paper elevation={3} className={classes.accountInformation_paper}>
        <div className={classes.accountInformation_body}>
          <Typography variant="h4" component="h2">
            Account Information
          </Typography>

          <div className={classes.accountInformation_section}>
            <Typography variant="h6" component="h6" className={classes.mb2}>
              Unchangable Information
            </Typography>
            <Grid container spacing={3}>
              <GridItem xxs={12} xs={12} sm={6} zeroMinWidth>
                <Typography noWrap variant="body2">
                  <strong>Account ID: </strong>
                  {firestoreUser?.uid}
                </Typography>
              </GridItem>
              <GridItem xxs={12} xs={12} sm={6}>
                <Typography noWrap variant="body2">
                  <strong>Email: </strong>
                  {firestoreUser?.email}
                </Typography>
              </GridItem>
            </Grid>
          </div>
          <Divider />
          <div className={classes.accountInformation_section}>
            <Typography variant="h6" component="h6">
              Profile
            </Typography>
            <Typography
              variant="caption"
              component="p"
              className={classes.mb2}
              color="textSecondary"
            >
              This information will be displayed publicly
            </Typography>

            <div className={classes.mb2}>
              <Typography variant="subtitle2">Avatar</Typography>
              <Avatar
                alt="google avatar"
                src={firestoreUser?.avatar || undefined}
                className={classes.accountInformation_avatar}
              />
            </div>
            <Grid container spacing={3}>
              <GridItem xxs={12} xs={12} sm={6}>
                <Controller
                  name="displayName"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <TextField
                      id="firestoreUser-displayName"
                      label="Display Name"
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
                          ? classes.accountInformation_textField__success
                          : undefined,
                      }}
                      {...field}
                    />
                  )}
                />
              </GridItem>
            </Grid>
          </div>
        </div>
        <div className={classes.accountInformation_actions}>
          <Button
            size="large"
            variant="contained"
            disabled={!isValid || !isDirty}
            type="submit"
          >
            Edit Account
          </Button>
        </div>
      </Paper>
    </form>
  );
}
