import { useEffect } from "react";
import { useUser } from "reactfire";
import {
  useFirestoreUser,
  useEditFirestoreUser,
  firestoreUserFormDefaultValues,
  IFirestoreUserFormSchema,
} from "hooks";
import { FormProvider } from "react-hook-form";
import AccountInformationForm from "./AccountInformationForm";

export default function AccountInformation() {
  const user = useUser();
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

  return (
    <FormProvider {...methods}>
      <AccountInformationForm firestoreUser={data} />
    </FormProvider>
  );
}
