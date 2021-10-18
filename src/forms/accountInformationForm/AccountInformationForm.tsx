import { Button, Divider, Grid, Typography } from "@mui/material";
import { GridItem, StyledTextField } from "components";
import { FirestoreUser } from "types";
import { IFirestoreUserFormSchema, useEditFirestoreUserMutation } from "hooks";
import { Controller, useFormContext } from "react-hook-form";
import { checkKeyDown } from "utils";
import { useTranslation } from "react-i18next";
import {
  StyledPaper,
  Content,
  Row,
  Header,
  Caption,
  StyledAvatar,
  AvatarContainer,
  Actions,
} from "./AccountInformationForm.styled";

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
      <StyledPaper>
        <Content>
          <Row>
            <Header variant="h6" component="h6">
              {t("pages.more.profile.privateInformation")}
            </Header>
            <Grid container spacing={3}>
              <GridItem sm={6} zeroMinWidth>
                <Typography noWrap variant="body2">
                  <strong>
                    {t("pages.more.profile.accountID")}
                    {": "}
                  </strong>
                  {firestoreUser?.uid}
                </Typography>
              </GridItem>
              <GridItem sm={6}>
                <Typography noWrap variant="body2">
                  <strong>
                    {t("pages.more.profile.email")}
                    {": "}
                  </strong>
                  {firestoreUser?.email}
                </Typography>
              </GridItem>
            </Grid>
          </Row>
          <Divider />
          <Row>
            <Typography variant="h6" component="h6">
              {t("pages.more.profile.publicInformation")}
            </Typography>
            <Caption variant="caption" component="p" color="textSecondary">
              {t("pages.more.profile.publicInformationDescription")}
            </Caption>

            <AvatarContainer>
              <Typography variant="subtitle2">
                {t("pages.more.profile.avatar")}
              </Typography>
              <StyledAvatar
                alt="google avatar"
                src={firestoreUser?.avatar || undefined}
              />
            </AvatarContainer>
            <Grid container spacing={3}>
              <GridItem sm={6}>
                <Controller
                  // @ts-ignore
                  name="displayName"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <StyledTextField
                      id="firestoreUser-displayName"
                      label={t("pages.more.profile.displayName")}
                      variant="outlined"
                      fullWidth
                      required
                      error={Boolean(fieldState.error)}
                      // @ts-ignore
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
            </Grid>
          </Row>
        </Content>
        <Actions>
          <Button
            size="large"
            variant="contained"
            disabled={!isValid || !isDirty}
            type="submit"
          >
            {t("pages.more.profile.editAccount")}
          </Button>
        </Actions>
      </StyledPaper>
    </form>
  );
}
