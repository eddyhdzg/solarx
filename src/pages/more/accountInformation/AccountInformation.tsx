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

export default function AccountInformationPage() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: "more", url: "/more" });
  }, [onChangeRoute]);

  return (
    <AuthWrapper>
      <Seo
        title="Account information"
        description="Edit your account information."
      />
      <PageTitle>Account information</PageTitle>
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
