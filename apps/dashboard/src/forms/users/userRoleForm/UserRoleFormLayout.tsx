import { useRole, IEditRoleSchema } from "hooks";
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, InputLabel } from "@mui/material";
import { StyledSelect } from "components";
import { UserRole } from "solarx-types";

interface IRoleSelectProps {
  onSubmit: (role: UserRole) => void;
  uid?: string;
}

export default function UserRoleFormLayout({
  uid,
  onSubmit,
}: IRoleSelectProps) {
  const { control } = useFormContext<IEditRoleSchema>();
  const userRole = useRole();
  const customId = `role-select-${uid}`;

  return (
    <Controller
      name="role"
      control={control}
      render={({ field: { value, onChange, ...field }, fieldState }) => {
        return (
          <FormControl fullWidth>
            <InputLabel htmlFor={customId}>Role</InputLabel>
            <StyledSelect
              id={customId}
              label="Role"
              variant="outlined"
              native
              required
              error={Boolean(fieldState.error)}
              success={fieldState.isDirty}
              value={value || ""}
              disabled={userRole === "ADMIN" || value === "SUPER_USER"}
              onChange={(e) => {
                onSubmit(e.target.value as UserRole);
              }}
              {...field}
            >
              <option aria-label="None" value="" disabled />
              <optgroup label="Investors">
                <option value="DEFAULT">Default</option>
                <option value="BETA">Beta</option>
              </optgroup>
              <optgroup label="SolarX Team">
                <option value="ADMIN">Admin</option>
                <option value="MODERATOR">Moderator</option>
                <option value="SUPER_USER" disabled>
                  Super_User
                </option>
              </optgroup>
            </StyledSelect>
          </FormControl>
        );
      }}
    />
  );
}
