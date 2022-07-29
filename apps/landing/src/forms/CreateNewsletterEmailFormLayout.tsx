import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SubmitForm } from "solarx-types";
import { CreateNewsletterEmailFormFormSchema } from "hooks";
import { Box } from "@mui/material";
import { CTA } from "components";
import { Input } from "./CreateNewsletterEmailFormLayout.styled";

interface CreateNewsletterEmailFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function CreateNewsletterEmailFormLayout({
  onSubmit,
}: CreateNewsletterEmailFormLayoutProps) {
  const { t } = useTranslation();
  const { control } = useFormContext<CreateNewsletterEmailFormFormSchema>();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      sx={{
        position: "relative",
        display: "flex",
        flexGrow: 1,
      }}
    >
      <Controller
        name="email"
        control={control}
        render={({ field, formState }) => {
          return (
            <Input
              id="email-input"
              label={t("pages.landing.email")}
              variant="outlined"
              fullWidth
              type="email"
              inputProps={{
                autoComplete: "disabled",
              }}
              InputProps={{
                endAdornment: (
                  <CTA
                    variant="contained"
                    size="large"
                    disabled={!formState.isValid}
                    type="submit"
                  >
                    {t("pages.landing.notifyMe")}
                  </CTA>
                ),
              }}
              {...field}
            />
          );
        }}
      />
    </Box>
  );
}
