import { useEffect } from "react";
import { useUser } from "reactfire";
import {
  useFirestoreUser,
  useEditFirestoreUser,
  firestoreUserFormDefaultValues,
  IFirestoreUserFormSchema,
} from "hooks";
import { useSigninCheck } from "reactfire";
import { FormProvider } from "react-hook-form";
import AccountInformationForm from "./AccountInformationForm";

export default function AccountInformation() {
  const user = useUser();
  const { data: signinResult } = useSigninCheck();
  const { data, status } = useFirestoreUser(user?.data?.uid);
  const methods = useEditFirestoreUser();

  useEffect(() => {
    const defaultValues: IFirestoreUserFormSchema = !data
      ? firestoreUserFormDefaultValues
      : {
          displayName: data?.displayName || "",
        };

    methods.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  if (!signinResult?.signedIn) {
    return <h1>Please Log In</h1>;
  }

  return (
    <FormProvider {...methods}>
      <AccountInformationForm firestoreUser={data} />
    </FormProvider>
  );
}
