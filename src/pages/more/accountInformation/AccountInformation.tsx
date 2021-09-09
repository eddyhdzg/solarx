import { useEffect } from "react";
import {
  useFirestoreUser,
  useEditFirestoreUser,
  firestoreUserFormDefaultValues,
  IFirestoreUserFormSchema,
  useHeader,
} from "hooks";
import { FormProvider } from "react-hook-form";
import AccountInformationForm from "forms/accountInformationForm/AccountInformationForm";
import { AuthWrapper, PageTitle, Seo } from "components";
import { useTranslation } from "react-i18next";

export default function AccountInformationPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.more"), url: "/more" });
  }, [onChangeRoute, t]);

  return (
    <AuthWrapper>
      <Seo
        title={t("pages.more.accountInformation.accountInformation")}
        description={t(
          "pages.more.accountInformation.accountInformationDescription"
        )}
      />
      <PageTitle>
        {t("pages.more.accountInformation.accountInformation")}
      </PageTitle>
      <AccountInformation />
    </AuthWrapper>
  );
}

function AccountInformation() {
  const { data, status } = useFirestoreUser();
  const methods = useEditFirestoreUser();

  useEffect(() => {
    const defaultValues: IFirestoreUserFormSchema = !data
      ? firestoreUserFormDefaultValues
      : {
          displayName: data?.displayName || "",
        };

    methods.reset(defaultValues);
  }, [status, data, methods]);

  return (
    <FormProvider {...methods}>
      <AccountInformationForm firestoreUser={data} />
    </FormProvider>
  );
}
