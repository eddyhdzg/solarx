import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProject, useHeader } from "hooks";
import { CenterLoader, Seo, CheckoutTemplate } from "components";
import { useTranslation } from "react-i18next";
import { ProjectIDParams } from "solarx-types";

export default function CheckoutPage() {
  const { t } = useTranslation();
  const { id = "" } = useParams<ProjectIDParams>();
  const { status, data } = useProject(id);
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({
      text: data?.name,
      url: `/crowdfunding/${id}`,
    });
  }, [onChangeRoute, t, id, data?.name]);

  if (status === "loading") {
    return <CenterLoader />;
  }

  return (
    <>
      <Seo
        title={`Checkout ${data?.name}`}
        description="Project checkout page."
      />
      <CheckoutTemplate />
    </>
  );
}
