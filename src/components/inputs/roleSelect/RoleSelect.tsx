import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { UserRole } from "types";
import { useEditRole, useRole } from "hooks";
import { RoleSelectFormControl } from "./RoleSelect.styled";

interface IRoleSelectProps {
  id?: string;
  role?: UserRole;
}

export default function RoleSelect({ id, role = "DEFAULT" }: IRoleSelectProps) {
  const customId = `role-select-${id}`;
  const { handleRoleMutaion } = useEditRole();
  const userRole = useRole();

  const handleChange = (event: SelectChangeEvent<string>) => {
    if (id) {
      handleRoleMutaion(id, event.target.value as UserRole);
    }
  };

  return (
    <RoleSelectFormControl variant="filled">
      <InputLabel htmlFor={customId}>Roles</InputLabel>
      <Select
        native
        id={customId}
        value={role || ""}
        onChange={handleChange}
        disabled={userRole === "ADMIN" || role === "SUPER_USER"}
      >
        <option aria-label="None" value="" />
        <optgroup label="Customers">
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
      </Select>
    </RoleSelectFormControl>
  );
}
