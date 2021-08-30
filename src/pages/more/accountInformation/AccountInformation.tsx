import { useEffect } from "react";
import {
  useFirestoreUser,
  useEditFirestoreUser,
  firestoreUserFormDefaultValues,
  IFirestoreUserFormSchema,
} from "hooks";
import { FormProvider } from "react-hook-form";
import AccountInformationForm from "forms/accountInformationForm/AccountInformationForm";
import { AuthWrapper } from "components";

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

export default function AccountInformationPage() {
  return (
    <AuthWrapper>
      <AccountInformation />
    </AuthWrapper>
  );
}
