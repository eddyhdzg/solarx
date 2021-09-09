import UsersTable from "./usersTable/UsersTable";
import { GlobalFilter } from "components";
import useStyles from "./usersTableLayout.jss";

interface IUsersTableLayoutProps {
  setGlobalFilter: any;
  table: any;
}

export default function UsersTableLayout({
  setGlobalFilter,
  table,
}: IUsersTableLayoutProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.projectTableLayout_root}>
        <GlobalFilter
          globalFilter={table.state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <UsersTable {...table} />
    </>
  );
}
