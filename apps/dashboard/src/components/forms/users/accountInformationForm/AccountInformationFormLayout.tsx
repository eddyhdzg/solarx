import { Button, Divider, Grid, Typography } from "@mui/material";
import { GridItem, StyledTextField } from "components";
import { IEditUserSchema, useFirestoreUser } from "hooks";
import { Controller, useFormContext } from "react-hook-form";
import { preventEnter } from "utils";
import { useTranslation } from "react-i18next";
import { SubmitForm } from "solarx-types";
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

interface IAccountInformationFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function AccountInformationFormLayout({
  onSubmit,
}: IAccountInformationFormLayoutProps) {
  const { t } = useTranslation();
  const { data } = useFirestoreUser();
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<IEditUserSchema>();

  return (
    <form
      noValidate
      autoComplete="off"
      onKeyDown={preventEnter}
      onSubmit={onSubmit}
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
                  {data?.uid}
                </Typography>
              </GridItem>
              <GridItem sm={6}>
                <Typography noWrap variant="body2">
                  <strong>
                    {t("common.email")}
                    {": "}
                  </strong>
                  {data?.email}
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
              <Typography variant="subtitle2">{t("common.avatar")}</Typography>
              <StyledAvatar alt="google avatar" src={data?.avatar} />
            </AvatarContainer>
            <Grid container spacing={3}>
              <GridItem sm={6}>
                <Controller
                  name="displayName"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <StyledTextField
                        id="firestoreUser-displayName"
                        label={t("pages.more.profile.displayName")}
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
