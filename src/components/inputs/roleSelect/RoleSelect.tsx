import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { UserRole } from "types";
import { useEditRole, useRole } from "hooks";
import useStyles from "./roleSelect.jss";

interface IRoleSelectProps {
  id?: string;
  role?: UserRole;
}

export default function RoleSelect({ id, role = "DEFAULT" }: IRoleSelectProps) {
  const classes = useStyles();
  const customId = `role-select-${id}`;
  const { handleRoleMutaion } = useEditRole();
  const userRole = useRole();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (id) {
      handleRoleMutaion(id, event.target.value as UserRole);
    }
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor={customId}>Roles</InputLabel>
        <Select
          native
          id={customId}
          value={role}
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
              Super User
            </option>
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
