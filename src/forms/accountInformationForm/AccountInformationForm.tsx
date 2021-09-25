import {
  alpha,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { GridItem } from "components";
import { FirestoreUser } from "types";
import { IFirestoreUserFormSchema, useEditFirestoreUserMutation } from "hooks";
import { Controller, useFormContext } from "react-hook-form";
import { checkKeyDown } from "utils";
import { useTranslation } from "react-i18next";

interface IAccountInformationFormProps {
  firestoreUser: FirestoreUser;
}

export default function AccountInformationForm({
  firestoreUser,
}: IAccountInformationFormProps) {
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
      <Paper
        sx={{
          maxWidth: (theme) => theme.spacing(100),
          display: "flex",
          overflow: "auto",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            p: {
              xxs: 2,
              md: 4,
            },
            mb: 2,
          }}
        >
          <Box
            sx={{
              my: 4,
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                mb: 2,
              }}
            >
              {t("pages.more.accountInformation.privateInformation")}
            </Typography>
            <Grid container spacing={3}>
              <GridItem sm={6} zeroMinWidth>
                <Typography noWrap variant="body2">
                  <strong>
                    {t("pages.more.accountInformation.accountID")}
                    {": "}
                  </strong>
                  {firestoreUser?.uid}
                </Typography>
              </GridItem>
              <GridItem sm={6}>
                <Typography noWrap variant="body2">
                  <strong>
                    {t("pages.more.accountInformation.email")}
                    {": "}
                  </strong>
                  {firestoreUser?.email}
                </Typography>
              </GridItem>
            </Grid>
          </Box>
          <Divider />
          <Box
            sx={{
              my: 4,
            }}
          >
            <Typography variant="h6" component="h6">
              {t("pages.more.accountInformation.publicInformation")}
            </Typography>
            <Typography
              variant="caption"
              component="p"
              color="textSecondary"
              sx={{ mb: 2 }}
            >
              {t("pages.more.accountInformation.publicInformationDescription")}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">
                {t("pages.more.accountInformation.avatar")}
              </Typography>
              <Avatar
                alt="google avatar"
                src={firestoreUser?.avatar || undefined}
                sx={{
                  width: (theme) => theme.spacing(7),
                  height: (theme) => theme.spacing(7),
                }}
              />
            </Box>
            <Grid container spacing={3}>
              <GridItem sm={6}>
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
                      // @ts-ignore
                      helperText={fieldState.error?.message}
                      inputProps={{
                        autoComplete: "disabled",
                      }}
                      sx={
                        fieldState.isDirty
                          ? {
                              "& input:valid + fieldset": {
                                borderColor: "green",
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
          </Box>
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
            {t("pages.more.accountInformation.editAccount")}
          </Button>
        </Box>
      </Paper>
    </form>
  );
}
