import { useRole, IEditRoleSchema } from "hooks";
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, InputLabel } from "@mui/material";
import { StyledSelect } from "components";
import { UserRole } from "solarx-types";
import { useTranslation } from "react-i18next";

interface IRoleSelectProps {
  onSubmit: (role: UserRole) => void;
  uid?: string;
}

export default function UserRoleFormLayout({
  uid,
  onSubmit,
}: IRoleSelectProps) {
  const { control } = useFormContext<IEditRoleSchema>();
  const role = useRole();
  const customId = `role-select-${uid}`;
  const { t } = useTranslation();

  return (
    <Controller
      name="role"
      control={control}
      render={({ field: { value = "", onChange, ...field }, fieldState }) => {
        const disabled = role === "ADMIN" || value === "SUPER_USER";
        return (
          <FormControl fullWidth>
            <InputLabel htmlFor={customId}>
              {t("pages.admin.investors.role")}
            </InputLabel>
            <StyledSelect
              id={customId}
              label="Role"
              variant="outlined"
              native
              required
              error={Boolean(fieldState.error)}
              success={fieldState.isDirty}
              value={value}
              disabled={disabled}
              onChange={(e) => {
                onSubmit(e.target.value as UserRole);
              }}
              {...field}
            >
              <option aria-label="None" value="" disabled />
              <optgroup label="Investors">
                <option value="DEFAULT">
                  {t("pages.admin.investors.default")}
                </option>
                <option value="BETA">{t("pages.admin.investors.beta")}</option>
              </optgroup>
              <optgroup label="SolarX Team">
                <option value="ADMIN">
                  {t("pages.admin.investors.admin")}
                </option>
                <option value="MODERATOR">
                  {t("pages.admin.investors.moderator")}
                </option>
                <option value="SUPER_USER" disabled>
                  {t("pages.admin.investors.superUser")}
                </option>
              </optgroup>
            </StyledSelect>
          </FormControl>
        );
      }}
    />
  );
}
