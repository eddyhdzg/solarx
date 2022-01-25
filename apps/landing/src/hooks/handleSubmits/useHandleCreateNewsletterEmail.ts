import {
  useNewsletterEmail,
  useCreateNewsletterEmailMutation,
  CreateNewsletterEmailFormFormSchema,
} from "hooks";
import { useSnackbar } from "notistack";
import { UseFormReset } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAnalytics } from "reactfire";
import { logEvent } from "firebase/analytics";

const useHandleCreateNewsletterEmail = () => {
  const readNewsletterEmail = useNewsletterEmail();
  const createNewsletterEmailMutation = useCreateNewsletterEmailMutation();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const analytics = useAnalytics();

  const handleCreateNewsletterEmail = async (
    reset: UseFormReset<CreateNewsletterEmailFormFormSchema>,
    values: CreateNewsletterEmailFormFormSchema
  ) => {
    const doc = await readNewsletterEmail(values.email);

    if (doc.exists()) {
      enqueueSnackbar(t("snackbar.emailAlready"), { variant: "warning" });
    } else {
      createNewsletterEmailMutation(values.email)
        .then(() => {
          enqueueSnackbar(t("snackbar.emailAdded"), { variant: "success" });
          logEvent(analytics, "comingSoon_newsletter", {
            page_location: window.location.href,
            email: values.email,
          });
          reset();
        })
        .catch(() => {
          enqueueSnackbar(t("snackbar.emailError"), {
            variant: "error",
          });
        });
    }
  };

  return handleCreateNewsletterEmail;
};

export default useHandleCreateNewsletterEmail;
