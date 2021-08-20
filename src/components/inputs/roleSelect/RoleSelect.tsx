import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { UserRole } from "types";
import { useEditRole } from "hooks";
import useStyles from "./roleSelect.jss";

interface IRoleSelectProps {
  id?: string;
  role?: UserRole;
}

export default function RoleSelect({ id, role = "default" }: IRoleSelectProps) {
  const classes = useStyles();
  const customId = `role-select-${id}`;
  const { handleRoleMutaion } = useEditRole();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleRoleMutaion(id, event.target.value as UserRole);
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
          disabled={role === "superUser"}
        >
          <option aria-label="None" value="" />
          <optgroup label="Customers">
            <option value="default">Default</option>
            <option value="beta">Beta</option>
          </optgroup>
          <optgroup label="SolarX Team">
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="superUser" disabled>
              Super User
            </option>
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
