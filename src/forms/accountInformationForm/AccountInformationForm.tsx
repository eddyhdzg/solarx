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
import { IFirestoreUserFormSchema, useEditFirestoreUserMutation } from "hooks";
import { Controller, useFormContext } from "react-hook-form";
import useStyles from "./accountInformation.jss";
import { checkKeyDown } from "utils";
import { useTranslation } from "react-i18next";

interface IAccountInformationFormProps {
  firestoreUser: FirestoreUser;
}

export default function AccountInformationForm({
  firestoreUser,
}: IAccountInformationFormProps) {
  const classes = useStyles();
  const { t } = useTranslation();
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
    <form
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      onKeyDown={(e) => checkKeyDown(e)}
    >
      <Paper elevation={3} className={classes.accountInformation_paper}>
        <div className={classes.accountInformation_body}>
          <div className={classes.accountInformation_section}>
            <Typography variant="h6" component="h6" className={classes.mb2}>
              {t("pages.more.accountInformation.privateInformation")}
            </Typography>
            <Grid container spacing={3}>
              <GridItem xxs={12} xs={12} sm={6} zeroMinWidth>
                <Typography noWrap variant="body2">
                  <strong>
                    {t("pages.more.accountInformation.accountID")}
                    {": "}
                  </strong>
                  {firestoreUser?.uid}
                </Typography>
              </GridItem>
              <GridItem xxs={12} xs={12} sm={6}>
                <Typography noWrap variant="body2">
                  <strong>
                    {t("pages.more.accountInformation.email")}
                    {": "}
                  </strong>
                  {firestoreUser?.email}
                </Typography>
              </GridItem>
            </Grid>
          </div>
          <Divider />
          <div className={classes.accountInformation_section}>
            <Typography variant="h6" component="h6">
              {t("pages.more.accountInformation.publicInformation")}
            </Typography>
            <Typography
              variant="caption"
              component="p"
              className={classes.mb2}
              color="textSecondary"
            >
              {t("pages.more.accountInformation.publicInformationDescription")}
            </Typography>

            <div className={classes.mb2}>
              <Typography variant="subtitle2">
                {t("pages.more.accountInformation.avatar")}
              </Typography>
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
                      label={t("pages.more.accountInformation.displayName")}
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
            {t("pages.more.accountInformation.editAccount")}
          </Button>
        </div>
      </Paper>
    </form>
  );
}
